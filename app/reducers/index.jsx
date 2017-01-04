import { combineReducers } from 'redux'
import campusReducer from './campusReducer';
import studentReducer from './studentReducer';

const initialState = {}

const rootReducer = combineReducers({
	campuses: campusReducer,
	students: studentReducer
});

export default rootReducer
