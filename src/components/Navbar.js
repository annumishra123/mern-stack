import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../App'
import Cookies from 'js-cookie'

const Navbar = () => {

  const { state, dispatch } = useContext(UserContext)
  // console.log(state,"anurag....");

  const RenderMenu = () => {
    const data = Cookies.get('jwtoken')
    console.log(data,"anurag fjhdj mishra");

    if (state) {
      return (
        <>
          <li class="nav-item active">
            <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/about">About</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/logout">Logout</NavLink>
          </li>

        </>
      )
    } else {
      return (
        <>
          <li class="nav-item active">
            <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/about">About</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/login">Login</NavLink>
          </li>

          <li class="nav-item">
            <NavLink class="nav-link" to="/siginup">siginup</NavLink>
          </li>

        </>
      )
    }
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <RenderMenu />
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar
