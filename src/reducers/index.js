import { combineReducers } from 'redux';
import addUpdateUserReducer from './addUpdateUser';
import getUserReducer from './getUser';


const rootReducer = combineReducers({
	addUpdateUser: addUpdateUserReducer,
	getUser:getUserReducer
});

export default rootReducer;
