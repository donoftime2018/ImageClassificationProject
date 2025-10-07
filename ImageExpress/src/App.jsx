import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [count, setCount] = createSignal(0)

  return (
    <>
      {props.children}
    </>
  )
}

export default App
