import React, { useReducer } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Form from '../Form/Form'
import { stateContext } from '../Context/stateContext'
import { initializevalue,stateReducer } from '../StateReducer'


const Routing = () => {
  const [state,dispatch]=useReducer(stateReducer,initializevalue)
  console.log("state",state);
  return (

    <stateContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Form" element={<Form />}></Route>
       </Routes>
      </BrowserRouter>
    </stateContext.Provider>
  )
}

export default Routing