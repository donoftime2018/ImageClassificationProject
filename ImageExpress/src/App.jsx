import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Outlet} from '@solidjs/router'

function App(props) {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
