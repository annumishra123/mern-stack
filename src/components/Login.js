import React, { useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../App'


const Login = () => {

  const {satae, dispatch} = useContext(UserContext)
  
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json();
    if(res.status === 400 || !data){
      window.alert("invalid credentials")
    } else{
      console.log(data,"anurag mishra....");
      dispatch({type:"USER", payload: true})
      window.alert("login successful")
      history.push("/")
    }
  }




  return (
    <>
      <form method="POST">
        <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
          <div className="col-sm-8">
            <input type="email" name="email" className="form-control form-control-sm" id="colFormLabelSm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email" />
          </div>
        </div>

        <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Password</label>
          <div className="col-sm-8">
            <input type="password" name="password" className="form-control form-control-sm" id="colFormLabelSm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password" />
          </div>
        </div>

        <div className="form-group form-button">
          <input type="submit" name="login" className="form-submit" value="Log In"
            onClick={loginUser}
          />
        </div>
      </form>

    </>
  )
}

export default Login
