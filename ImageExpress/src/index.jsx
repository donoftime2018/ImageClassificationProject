/* @refresh reload */
import { render } from 'solid-js/web'
import { lazy, Suspense } from 'solid-js'
import './index.css'
import App from './App.jsx'
import {Router, Route} from '@solidjs/router'
import 'tailwindcss'

const ImageUpload = lazy(() => import('./pages/ImageUpload/ImageUpload.jsx'))
const Category = lazy(() => import('./pages/Category/Category.jsx'))
const Results = lazy(() => import('./pages/Results/Results.jsx'))
const About = lazy(() => import('./pages/About/About.jsx'))
const Home = lazy(() => import('./pages/Home/Home.jsx'))

const root = document.getElementById('root')

render(() => 
(
    <Router root={App} base='/ImageClassificationProject'>
        <Route path="/" component={Home} />
        <Route path="/categorySelection" component={Category} />
        <Route path="/imageUpload" component={ImageUpload} />
        <Route path="/results" component={Results} />
        <Route path="/about" component={About} />
    </Router>
),

root)
