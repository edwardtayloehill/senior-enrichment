import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'

export default class Homepage extends Component {

	render () {
		console.log('test time')
		return (

			<div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="navbar-header">
          <a className="navbar-brand clearfix" >
						<h1>Margaret Hamilton Interplanetary JavaScript Academy</h1>
					</a>
        </div>
        <div className="collapse navbar-collapse">
				<h2>Campus Manager</h2>
          <ul className="nav navbar-nav">
						<li><Link to="/"> Home </Link></li>
						<li><Link to="campuses"> Campuses </Link></li>
						<li><Link to="students"> Students </Link></li>
          </ul>
        </div>
      </div>

			)
	}
}
