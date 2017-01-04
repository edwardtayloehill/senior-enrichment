'use strict'
import React from 'react'
import {render} from 'react-dom'
// import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';


import store from './store'
import Root from './components/Home'
import Routes from './routes'


render (
  <Routes/>,
  document.getElementById('main')
)

// render (
//   <Provider store={store}>
//     <Homepage/>
//   </Provider>,
//   document.getElementById('main')
// )


// render (
//   <Provider store={store}>
//     <Root/>
//   </Provider>,
//   document.getElementById('main')
// )
