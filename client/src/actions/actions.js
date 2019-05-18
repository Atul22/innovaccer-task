import ACTIONS from '../const/actions';
import auth from '../services/authService';

const loginSucces = (username) => {
	return {
		type: ACTIONS.LOGIN_SUCCESS,
		payload: username
	}
}

const loginError = (error) => {
	return {
		type: ACTIONS.LOGIN_ERROR,
		payload: error
	}
}


const logout = () => {
	return {
		type: ACTIONS.LOGOUT
	}
}

const asyncLogin = (user) => {
	return async (dispatch) => {
		try {
			const username = await auth.login(user.username, user.password);
			dispatch(loginSucces(username));
		} catch(error) {
			dispatch(loginError(error));
		}
	}
}



export default {
	asyncLogin,
	logout
}