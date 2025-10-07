import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import {Outlet} from '@solidjs/router'
import './App.css'


export default function App(props) {
  return (
    <>
      {props.children}
      {/* <Outlet/> */}
    </>
  )
}