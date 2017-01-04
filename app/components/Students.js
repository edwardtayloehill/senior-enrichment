import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom'
import { createStudent, deleteStudent } from '../action-creators/students'


export class Students extends Component {


	render () {

		let createNewStudent = this.props.createNewStudent;

		function studentCreator(event){
			event.preventDefault()
			let studentName = event.target.studentName.value;
			let studentEmail = event.target.studentEmail.value;
			let campusId = event.target.campusId.value;
			createNewStudent(studentName, studentEmail, campusId);
		}

		let removeStudent = this.props.removeStudent;

		function studentDestroyer(event){
			event.preventDefault()
			let targetStudent = event.target.value;
			removeStudent(targetStudent)
		}

		return (
			<div>
				<h2> Margaret Hamilton Interplanetary JavaScript Academy </h2>
        <div className="nav">
          <ul className="navlist">
            <li><Link to="/"> Home </Link></li>
						<li><Link to="/campuses"> Campuses </Link></li>
          </ul>
        </div>
				<div className="body">
					<h3> Students List </h3>
					<ul className="bodyList">
					{this.props.students.list.map(student => {
							return (
								<li key={student.id}>
									<Link to={`/students/${student.id}`}>{ student.name }</Link>
									<button onClick={studentDestroyer} value={student.id}> Remove Student </button>
								</li>
							)
						})
					}
					</ul>
				</div>
				<div>
					<h3> Add Student </h3>
					<form onSubmit={ studentCreator }>
						Student Name: <br/>
							<input type="text" name="studentName"/> <br/>
						Student Email: <br/>
							<input type="text" name="studentEmail"/> <br/>
						Campus: <br/>
							<input type="text" name="campusId"/> <br/>
							<button type="submit"> Submit </button>
					</form>
				</div>
			</div>
			)
	}
}

//////////////////// Connector /////////////////////////

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		createNewStudent: function(studentName, studentEmail){
			return dispatch(createStudent(studentName, studentEmail))
		},
		removeStudent: function(studentId){
			return dispatch(deleteStudent(studentId))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Students);
