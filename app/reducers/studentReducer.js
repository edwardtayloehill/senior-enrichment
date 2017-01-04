//import actions
import { GET_STUDENTS, GET_STUDENT, GET_STUDENT_BODY, NEW_STUDENT, UPDATE_STUDENT, REMOVE_STUDENT } from '../constants';


////////////////////////// STATE //////////////////////////

// In Redux, all the application state is stored as a single object
// It's a good idea to think of its shape before writing any code
// In this case the minimal representation of the apps state is going to
// include an array of students and a selected student

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

	const newState = Object.assign({}, state);

	switch (action.type){
		case GET_STUDENTS:
			newState.list = action.students;
			break;

    case GET_STUDENT:
			newState.selected = action.student;
			break;

		case GET_STUDENT_BODY:
			newState.list = action.students;
			break;

		case NEW_STUDENT:
			newState.created = action.newStudent;
			break;

		case UPDATE_STUDENT:
			newState.deleted = action.removedStudent;
			break;

		case REMOVE_STUDENT:
			newState.deleted = action.removedStudent;
			break;


		default:
			return state;
	}

	return newState;
}
