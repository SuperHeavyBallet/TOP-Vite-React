import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SayHello from './Hello.jsx'
import { AppL } from './List.jsx'
import { Persons } from './Persons.jsx'
import { ToDoList } from './ToDo.jsx'
import { MonthList } from './MothList.jsx'
import ButtonApp from './Button.jsx'
import ChangeColor from './ChangeColour.jsx'
import CustomInput from './CustomInput.jsx'
import Person from './Person.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Person />

  </React.StrictMode>,
)
