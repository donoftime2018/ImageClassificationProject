/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.jsx'
import {Router, Route} from '@solidjs/router'

const root = document.getElementById('root')

render(() => <Router root={App} />,
    
root)
