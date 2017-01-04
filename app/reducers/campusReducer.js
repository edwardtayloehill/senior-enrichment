//import actions
import { GET_CAMPUSES, GET_CAMPUS, CREATE_CAMPUS, UPDATE_CAMPUS, REMOVE_CAMPUS } from '../constants';


////////////////////////// STATE //////////////////////////

// In Redux, all the application state is stored as a single object
// It's a good idea to think of its shape before writing any code
// In this case the minimal representation of the apps state is going to
// include an array of campuses and a selected campus

const initialState = {
	list: [],
  selected: {}
}

// I may have overdone it a bit here with the reducer
// I don't know that I need all of these...

////////////////////////// REDUCER ////////////////////////////

// The reducer is used to specify how the application's state changes in response
// to a particular action that has been called.

export default function reducer( state = initialState, action) {
  console.log(action)

	const newState = Object.assign({}, state);

	switch (action.type){
		case GET_CAMPUSES:
			newState.list = action.campuses;
			break;

    case GET_CAMPUS:
			newState.selected = action.campus;
			break;

		case CREATE_CAMPUS:
			newState.created = action.newCampus;
			break;

		case UPDATE_CAMPUS:
			newState.deleted = action.removedCampus;
			break;

		case REMOVE_CAMPUS:
			newState.deleted = action.removedCampus;
			break;

		default:
			return state;
	}

	return newState;
}
