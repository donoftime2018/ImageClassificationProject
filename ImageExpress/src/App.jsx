import { createSignal } from 'solid-js'
import { Route, Router, Routes } from '@solidjs/router'
import { lazy } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ImageUpload = lazy(() => import('./pages/ImageUpload.jsx'))
const Category = lazy(() => import('./pages/Category.jsx'))
const Results = lazy(() => import('./pages/Results.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))

export default function App(props) {
  return (
      <main>
        <Routes>
            <Route path="/" component={Home} />
            <Route path="/categorySelection" component={Category} />
            <Route path="/imageUpload" component={ImageUpload} />
            <Route path="/results" component={Results} />
            <Route path="/about" component={About} />
        </Routes>
      </main>
  )
}