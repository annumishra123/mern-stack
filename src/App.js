import React, { createContext, useReducer} from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Siginup from './components/Siginup'
import ErrorPage from './components/ErrorPage'
import Logout from './components/Logout'
import {initialState, reducer} from '../src/reducer/UseReducer'

export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/siginup">
        <Siginup />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>

  )

}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Routing/>
      </UserContext.Provider>
    </>
  )
}

export default App
