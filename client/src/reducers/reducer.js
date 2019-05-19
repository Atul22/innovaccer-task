import ACTIONS from '../const/actions';
import STATE from '../const/state';
import auth from "../services/authService";
import {fromJS} from 'immutable';

function defaultState() {
	return fromJS({
		[STATE.USER]: auth.getCurrentUser(),
		[STATE.SHOW_PROGRESS]: false,
		[STATE.CURRENT_MONTH]: 0
	})
};

const reducer = (state = defaultState(), action) => {
	switch(action.type) {

		case ACTIONS.LOGIN: 
			return state.set(STATE.USER, action.payload.username);
		
		case ACTIONS.LOGOUT: 
			return state.set(STATE.USER, null);

		case ACTIONS.SHOW_PROGRESS:
			return state.set(STATE.SHOW_PROGRESS, true);	

		case ACTIONS.HIDE_PROGRESS:
			return state.set(STATE.SHOW_PROGRESS, false);

		case ACTIONS.INCREMENT_MONTH: 
			return state.set(STATE.CURRENT_MONTH, action.payload);

		case ACTIONS.DECREMENT_MONTH:
			return state.set(STATE.CURRENT_MONTH, action.payload);

		default:
			return state;
	}
}

export default reducer;