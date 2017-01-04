import { GET_STUDENT, GET_STUDENTS, GET_STUDENT_BODY, NEW_STUDENT, UPDATE_STUDENT, REMOVE_STUDENT } from '../constants';

import axios from 'axios';

///////////// ACTIONS: ACTION CREATORS ///////////////////
export const getSingleStudent = student => ({
  type: GET_STUDENT,
  student
});

export const getAllStudents = students => ({
  type: GET_STUDENTS,
  students
});

export const getStudentBody = students => ({
  type: GET_STUDENT_BODY,
  students
});

export const createNewStudent = newStudent => ({
    type: NEW_STUDENT,
    newStudent
});

export const updateStudent = updatedStudent => ({
    type: UPDATE_STUDENT,
    updatedStudent
});

export const removeStudent = (removedStudent) => ({
    type: REMOVE_STUDENT,
    removedStudent
});


//////////////////// ACTIONS: AYSNC THUNK CALLS //////////////////

export const loadAllStudents = function ()  {

	return function(dispatch) {

		axios.get('api/student')
		.then(res => res.data)
		.then(students => dispatch(getAllStudents(students)))
		.catch(err => console.error(err))
	}
}

export const loadStudentBody = function (campusId)  {

	return function(dispatch) {

		axios.get(`api/student/campus/${campusId}`)
		.then(res => res.data)
		.then(students => dispatch(getStudentBody(students)))
		.catch(err => console.error(err))
	}
}

export const loadOneStudent = function (studentId)  {

	return function(dispatch) {

		axios.get(`api/student/${studentId}`)
		.then(res => res.data)
		.then(returnedStudent => dispatch(getSingleStudent(returnedStudent)))
		.catch(err => console.error(err))
	}
}

export const createStudent = function(name, email, campusId) {
	return function(dispatch) {
    axios.post('api/student', {
       name: name,
       email: email,
       campusId: campusId
     })
		.then(res => res.data)
		.then(newStudent => {
			dispatch(createNewStudent(newStudent))
      dispatch(loadAllStudents())
		})
		.catch(err => console.error(err))
	}
}

export const deleteStudent = function(studentId) {
	return function(dispatch) {
    axios.delete(`api/student/${studentId}`)
		.then(res => res.data)
		.then(deletedStudent => {
			dispatch(removeStudent(deletedStudent))
      dispatch(loadAllStudents())
		})
		.catch(err => console.error(err))
	}
}

export const editStudent = function(studentId, name, email, campusId) {
	return function(dispatch) {
    axios.put(`api/student/${studentId}`, {
        name: name,
        email: email,
        campusId: campusId
     })
		.then(res => res.data)
		.then(updatedStudent => {
			dispatch(updateStudent(updatedStudent))
      dispatch(loadOneStudent(studentId))
		})
		.catch(err => console.error(err))
	}
}
