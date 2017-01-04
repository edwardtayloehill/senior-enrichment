import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom'
import { editStudent } from '../action-creators/students'


export class SingleStudent extends Component {

	render () {

		//brought in via the connector
		let updateTargetStudent = this.props.updateTargetStudent;

		function studentUpdater(event){
			console.log('this is the event')
			console.log(event.target.studentId.value)
			event.preventDefault()
			let targetStudent = event.target.studentId.value;
			let studentName = event.target.studentName.value;
			let studentEmail = event.target.studentEmail.value;
			let campusId = event.target.campusId.value;
			updateTargetStudent(targetStudent, studentName, studentEmail, campusId);
		}

		return (
			<div>
        <h2> Margaret Hamilton Interplanetary JavaScript Academy </h2>
        <div className="nav">
          <ul className="navlist">
            <li><Link to="/"> Home </Link></li>
						<li><Link to="/campuses"> Campuses </Link></li>
						<li><Link to="/students"> Students </Link></li>
          </ul>
        </div>
				<div className="body">
					<h2> Student Info </h2>
					<p>Student ID: {this.props.selected.id} </p>
					<p>Student Name: {this.props.selected.name} </p>
					<p>Student Campus: {this.props.selected.campusId} </p>
					<ul className="bodyList">
					</ul>
				</div>
				<div>
					<h3> Edit Student Information </h3>
					<form onSubmit={ studentUpdater }>
						Student Id: <br/>
							<input name="studentId" value= {this.props.selected.id}/> <br/>
						Student Name: <br/>
							<input type="text" name="studentName"/> <br/>
						Student Email: <br/>
							<input type="text" name="studentEmail"/> <br/>
						Campus Id: <br/>
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
    students: state.students,
    selected: state.students.selected
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateTargetStudent: function(targetStudent, studentName, studentEmail, campusId){
			return dispatch(editStudent(targetStudent, studentName, studentEmail, campusId))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleStudent);
