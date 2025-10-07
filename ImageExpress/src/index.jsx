/* @refresh reload */
import { render } from 'solid-js/web'
import { lazy } from 'solid-js'
import './index.css'
import App from './App.jsx'
import {Router, Route, Routes} from '@solidjs/router'

import Results from './pages/Results.jsx'
import Category from './pages/Category.jsx'
import ImageUpload from './pages/ImageUpload.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'

const root = document.getElementById('root')

render(() => 
(
    <Router root={App}>
        {/* <Routes> */}
        <Route path="/" component={Home}></Route>
        <Route path="/categorySelection" component={Category}></Route>
        <Route path="/imageUpload" component={ImageUpload}></Route>
        <Route path="/results" component={Results}></Route>
        <Route path="/about" component={About}></Route>
        {/* </Routes> */}
    </Router>
),

root)
