import ACTIONS from '../const/actions';
import {fromJS} from 'immutable';
import _ from 'lodash';

function defaultState() {
	return fromJS({
		user: null,
		error: ''
	})
};

const reducer = (state = defaultState(), action) => {
	switch(action.type) {
		case ACTIONS.LOGIN_SUCCESS: {
			return state.set('user', action.payload.username);
		}
		case ACTIONS.LOGIN_ERROR: {
			console.log(action.payload);
			return state.set('error', action.payload.error);
		}
		default:
			return state;
	}
}

export default reducer;