import React, { useState, useEffect } from 'react'

const Home = () => {

  const [username, setUserName] = useState("")

  const userHome = async () => {
    try {

      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await res.json()
      setUserName(data.name)


    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userHome()
  }, [])

  return (
    <div>
      <h1>Home </h1>
      <h1>{username} </h1>
    </div>
  )
}

export default Home
