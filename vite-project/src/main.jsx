import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SayHello from './Hello.jsx'
import { AppL } from './List.jsx'
import { Persons } from './Persons.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Persons/>

  </React.StrictMode>,
)
