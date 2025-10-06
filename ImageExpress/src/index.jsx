/* @refresh reload */
import { render } from 'solid-js/web'
import { lazy } from 'solid-js'
import './index.css'
import App from './App.jsx'
import {Router, Route} from '@solidjs/router'

const Results = lazy(() => import("./components/Results/R"))

const root = document.getElementById('root')

render(() => 
(

    <Router root={App}>
        <Route path="/categorySelection"></Route>
        <Route path="/imageUpload"></Route>
        <Route path="/results"></Route>
        <Route path="/about"></Route>

    </Router>

),

root)
