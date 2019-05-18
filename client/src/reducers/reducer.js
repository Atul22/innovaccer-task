import ACTIONS from '../const/actions';
import STATE from '../const/state';
import {fromJS} from 'immutable';

function defaultState() {
	return fromJS({
		[STATE.USER]: null,
		[STATE.SHOW_PROGRESS]: false
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

		default:
			return state;
	}
}

export default reducer;