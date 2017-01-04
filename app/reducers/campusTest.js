// import axios from 'axios'
//
//
// ////////////////////////// STATE //////////////////////////
//
// // In Redux, all the application state is stored as a single object
// // It's a good idea to think of its shape before writing any code
// // In this case the minimal representation of the apps state is going to
// // include an array of campuses and a selected campus
//
// const initialState = {
// 	list: [],
// }
//
//
// ////////////////////////// REDUCER ////////////////////////////
//
// // The reducer is used to specify how the application's state changes in response
// // to a particular action that has been called.
//
// export default function reducer( state = initialState, action) {
//   console.log(action)
//
// 	const nextState = Object.assign({}, state);
//
// 	switch (action.type){
// 		case GET_CAMPUSES:
// 			nextState.list = action.campuses;
// 			break;
//
// 		default:
// 			return state;
// 	}
//
// 	return nextState;
// }
//
// ///////////////////// ACTIONS ////////////////////////////
// // Actions are payloads of information that send data from
// // your application to your store. They are the only source
// // of information for the store. You send them to the store
// // using store.dispatch().
//
// //////////////////// ACTIONS: CONSTANTS //////////////////
// import { GET_CAMPUSES } from '../constants';
//
// export const GET_CAMPUS = 'GET_CAMPUS'
// // export const GET_CAMPUSES = 'GET_CAMPUSES'
// export const NEW_CAMPUS = 'NEW_CAMPUS'
// export const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
// export const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
//
// ///////////// ACTIONS: ACTION CREATORS ///////////////////
// // import {getAllCampuses} from '../action-creators/campuses'
//
// // function getAllCampuses(campuses) {
// // 	return {
// // 		type: GET_CAMPUSES,
// // 		campuses
// // 	}
// // }
//
// //////////////////// ACTIONS: AYSNC THUNK CALLS //////////////////
//
// // export const getCampusAsync = function ()  {
// //   console.log('axios call')
// // 	return function(dispatch) {
// // 		axios.get('api/campus')
// // 		.then(res => res.data)
// // 		.then(campuses => dispatch(getAllCampuses(campuses)))
// // 		.catch(err => console.error(err))
// // 	}
// // }
