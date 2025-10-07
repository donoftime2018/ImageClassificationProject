/* @refresh reload */
import { render } from 'solid-js/web'
import { lazy } from 'solid-js'
import './index.css'
import App from './App.jsx'
import {Router, Route} from '@solidjs/router'

// const Results = lazy(() => import("./components/Results/Results.jsx"))
// const Category = lazy(() => import("./components/Category/Category.jsx"))
// const ImageUpload = lazy(() => import("./components/ImageUpload/ImageUpload.jsx"))
// const About = lazy(() => import("./components/About/About.jsx"))    
// const Home = lazy(() => import("./components/Home/Home.jsx"))

import Results from './components/Results.jsx'
import Category from './components/Category.jsx'
import ImageUpload from './components/ImageUpload.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'

const root = document.getElementById('root')

render(() => 
(

    <Router root={App}>
        <Route path="/categorySelection" component={Category}></Route>
        <Route path="/imageUpload" component={ImageUpload}></Route>
        <Route path="/results" component={Results}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/" component={Home}></Route>
    </Router>

),

root)
