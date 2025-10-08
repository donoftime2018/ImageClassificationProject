/* @refresh reload */
import { render } from 'solid-js/web'
import { lazy, Suspense } from 'solid-js'
import './index.css'
import App from './App.jsx'
import {Router, Route} from '@solidjs/router'

// import Results from './pages/Results.jsx'
// import Category from './pages/Category.jsx'
// import ImageUpload from './pages/ImageUpload.jsx'
// import About from './pages/About.jsx'
// const ImageUpload = lazy(() => import('./pages/ImageUpload.jsx'))
// const Category = lazy(() => import('./pages/Category.jsx'))
// const Results = lazy(() => import('./pages/Results.jsx'))
// const About = lazy(() => import('./pages/About.jsx'))
// const Home = lazy(() => import('./pages/Home.jsx'))

const root = document.getElementById('root')

render(() => 
(
    <Router>
        <App/>
        {/* <App /> */}
            {/* <Routes> */}
            {/* </Routes> */}
        {/* </App> */}
    </Router>
),

root)
