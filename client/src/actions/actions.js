import ACTIONS from '../const/actions';
import auth from '../services/authService';
import { toast } from "react-toastify";

const loginSucces = (username) => {
	return {
		type: ACTIONS.LOGIN,
		payload: username
	}
}

const logout = () => {
	return {
		type: ACTIONS.LOGOUT,
		payload: auth.logout()
	}
}

const showProgressBar = () => {
	return {
		type: ACTIONS.SHOW_PROGRESS
	}
}

const hideProgressBar = () => {
	return {
		type: ACTIONS.HIDE_PROGRESS
	}
}

const incrementMonth = (month) => {
	return {
		type: ACTIONS.INCREMENT_MONTH,
		payload: month
	}
}

const decrementMonth = (month) => {
	return {
		type: ACTIONS.DECREMENT_MONTH,
		payload: month
	}
}

const asyncLogin = (user) => {
	return async (dispatch) => {
		try {
			dispatch(showProgressBar());
			const username = await auth.login(user.username, user.password);
			dispatch(loginSucces(username));
		} catch(error) {
			toast.error(error.response.data.errorMessage);
		}
		dispatch(hideProgressBar());
	}
}



export default {
	asyncLogin,
	logout,
	incrementMonth,
	decrementMonth
}