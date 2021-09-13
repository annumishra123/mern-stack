import React, { useEffect, useState } from 'react'
import Anurag from '../image/anurag.jpg'
import { useHistory } from 'react-router-dom'
// import User from '../../../server/models/userSchema'


const About = () => {
  const [userData, setUserData] = useState({})
  const history = useHistory()

  const callAboutPage = async () => {
    try {

      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await res.json()
      console.log(data.id);
      setUserData(data)

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error;
      }

    } catch (err) {
      console.log(err);
      history.push('/login')
    }
  }

  useEffect(() => {
    callAboutPage()
  }, [])

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <tr>
                <td>{userData.name}</td>
              </tr>
              <tr>
                <td>{userData.email}</td>
              </tr>
              <tr>
                <td>{userData.phone}</td>
              </tr>

              <tr>
                <td>{userData.work}</td>
              </tr>

            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About
