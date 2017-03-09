import React from 'react'
import ReactDOM from 'react-dom'

import { Home } from './Home'
import About from './About'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store from './_main/store'


ReactDOM.render(
    <Provider store={store}>
        <Router history={ hashHistory }>
            <Route path='/' component={ Home }></Route>
            <Route path='/about' component={ About }></Route>
        </Router>
    </Provider>
    ,
    document.getElementById('app'))