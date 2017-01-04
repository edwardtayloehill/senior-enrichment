import React from 'react';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute, Link } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';

//import store
import store from './store'

//import components
import Homepage from './components/Homepage';
import Campuses from './components/Campuses';
import SingleCampus from './components/SingleCampus';
import Students from './components/Students';
import SingleStudent from './components/SingleStudent';


//import action creators
// import { getCampusAsync } from './reducers/campusTest'
import { loadAllCampuses, loadOneCampus } from './action-creators/campuses'
import { loadAllStudents, loadOneStudent, loadStudentBody } from './action-creators/students'

//Dispatch load all campuses
const onCampusesEnter = function (nextRouterState) {
  console.log('onCampusesEnter')
  store.dispatch(loadAllCampuses());
};

//Dispatch load single campuses
const onCampusEnter = function (nextRouterState) {
  console.log('onSingleCampusesEnter')
  store.dispatch(loadOneCampus(nextRouterState.params.campusId))
  store.dispatch(loadStudentBody(nextRouterState.params.campusId));
};

//Dispatch load all students
const onStudentsEnter = function (nextRouterState) {
  console.log('onStudentsEnter')
  store.dispatch(loadAllStudents());
};

//Dispatch load single student
const onStudentEnter = function (nextRouterState) {
  console.log('onSingleStudentEnter')
  store.dispatch(loadOneStudent(nextRouterState.params.studentId));
};


//set up other on enter calls (i.e. on-campus or on-student)
// component={App} onEnter={onAppEnter}>
// <Route path="/campus" component={CampusContainer}/>
// <Route path="/campus/:campusId" component={CampusContainer} onEnter={onCampusEnter}/>
// <Route path="/student" component={FilterableStudentContainer}/>
// <Route path="/student/:studentId" component={StudentContainer} onEnter={onStudentEnter}/>

//export default
export default () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Homepage} />
        <Route path="/campuses" component={Campuses} onEnter={onCampusesEnter}/>
        <Route path="/campuses/:campusId" component={SingleCampus} onEnter={onCampusEnter}/>
        <Route path="/students" component={Students} onEnter={onStudentsEnter}/>
        <Route path="/students/:studentId" component={SingleStudent} onEnter={onStudentEnter}/>
      </Router>
    </Provider>
  );
}

//
