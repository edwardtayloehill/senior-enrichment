import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import { createCampus, deleteCampus } from '../action-creators/campuses'


export class Campuses extends Component {


	render () {

		//brought in via the connector
		let createNewCampus = this.props.createNewCampus;

		function campusCreator(event){
			event.preventDefault()
			let campusName = event.target.campusName.value;
			let imageUrl = event.target.imageUrl.value;
			createNewCampus(campusName, imageUrl);
		}

		//brought in via the connector
		let removeCampus = this.props.removeCampus;

		function campusDestroyer(event){
			event.preventDefault()
			let targetCampus = event.target.value;
			removeCampus(targetCampus)
		}

		return (
			<div>
        <h2> Margaret Hamilton Interplanetary JavaScript Academy </h2>
        <div className="nav">
          <ul className="navlist">
            <li><Link to="/"> Home </Link></li>
						<li><Link to="/students"> Students </Link></li>
          </ul>
        </div>
				<div className="body">
					<h3> Campus List </h3>
					<ul className="bodyList">
					{this.props.campuses.list.map(campus => {
							return (
								<li key={campus.id}>
									<Link to={`/campuses/${campus.id}`}>{ campus.name } </Link>
									<button onClick={campusDestroyer} value={campus.id}> Remove Campus </button>
								</li>
							)
						})
					}
					</ul>
				</div>
				<div>
					<h3> Add Campus </h3>
					<form onSubmit={ campusCreator }>
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
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		createNewCampus: function(campusName, imageUrl){
			return dispatch(createCampus(campusName, imageUrl))
		},
		removeCampus: function(campusId){
			return dispatch(deleteCampus(campusId))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Campuses);
