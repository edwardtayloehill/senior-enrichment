import { GET_CAMPUS, GET_CAMPUSES, CREATE_CAMPUS, UPDATE_CAMPUS, REMOVE_CAMPUS } from '../constants';
import axios from 'axios';

///////////// ACTIONS: ACTION CREATORS ///////////////////
export const getSingleCampuses = campus => ({
  type: GET_CAMPUS,
  campus
});

export const getAllCampuses = campuses => ({
  type: GET_CAMPUSES,
  campuses
});

export const createNewCampus = newCampus => ({
    type: CREATE_CAMPUS,
    newCampus
});

export const updateCampus = updatedCampus => ({
    type: UPDATE_CAMPUS,
    updatedCampus
});

export const removeCampus = removedCampus => ({
    type: REMOVE_CAMPUS,
    removedCampus
});


//////////////////// ACTIONS: AYSNC THUNK CALLS //////////////////

export const loadAllCampuses = function ()  {
	return function(dispatch) {
		axios.get('api/campus')
		.then(res => res.data)
		.then(campuses => dispatch(getAllCampuses(campuses)))
		.catch(err => console.error(err))
	}
}

export const loadOneCampus = function (campusId)  {
	return function(dispatch) {
		axios.get(`api/campus/${campusId}`)
		.then(res => res.data)
		.then(returnedCampus => dispatch(getSingleCampuses(returnedCampus)))
		.catch(err => console.error(err))
	}
}


export const createCampus = function(name, image) {
	return function(dispatch) {
    axios.post('api/campus', {
       name: name,
       image: image
     })
		.then(res => res.data)
		.then(newCampus => {
			dispatch(createNewCampus(newCampus))
      dispatch(loadAllCampuses())
		})
		.catch(err => console.error(err))
	}
}

export const deleteCampus = function(campusId) {
	return function(dispatch) {
    axios.delete(`api/campus/${campusId}`)
		.then(res => res.data)
		.then(deletedCampus => {
			dispatch(removeCampus(deletedCampus))
      dispatch(loadAllCampuses())
		})
		.catch(err => console.error(err))
	}
}


export const editCampus = function(campusId, name, image) {
	return function(dispatch) {
    axios.put(`api/campus/${campusId}`, {
       name: name,
       image: image
     })
		.then(res => res.data)
		.then(updatedCampus => {
			dispatch(updateCampus(updatedCampus))
      dispatch(loadOneCampus(campusId))
		})
		.catch(err => console.error(err))
	}
}
