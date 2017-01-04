import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom'
import { editCampus } from '../action-creators/campuses'


export class SingleCampus extends Component {


	render () {

		//brought in via the connector
		let updateTargetCampus = this.props.updateTargetCampus;

		function campusUpdater(event){
			console.log('this is the event')
			console.log(event.target.campusName.value)
			event.preventDefault()
			let targetCampus = event.target.campusId.value;
			let campusName = event.target.campusName.value;
			let imageUrl = event.target.imageUrl.value;
			updateTargetCampus(targetCampus, campusName, imageUrl);
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
					<h3> Campus Info </h3>
					<p>Campus Name: {this.props.selected.name} </p>
					<p>Campus ID: {this.props.selected.id} </p>
					<img src={ this.props.selected.image } />
					<ul className="bodyList">
					</ul>
				</div>
				<div className="body">
					<h3> Students List </h3>
					<ul className="bodyList">
					{this.props.students.list.map(student => {
							return (
								<li key={student.id}>
									<Link to={`/students/${student.id}`}>{ student.name }</Link>
								</li>
							)
						})
					}
					</ul>
				</div>
				<div>
					<h3> Edit Campus Information </h3>
					<form onSubmit={ campusUpdater }>
						Campus Id: <br/>
							<input name="campusId" value= {this.props.selected.id}/> <br/>
						Campus Name: <br/>
							<input type="text" name="campusName"/> <br/>
						Campus Image URL: <br/>
							<input type="text" name="imageUrl"/> <br/>
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
    campuses: state.campuses,
    selected: state.campuses.selected,
		students: state.students
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateTargetCampus: function(targetCampus, campusName, imageUrl){
			return dispatch(editCampus(targetCampus, campusName, imageUrl))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleCampus);
