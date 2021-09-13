import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" })
  //  const [userData, setUserData] = useState({})
  const userContact = async () => {
    try {

      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await res.json()
      console.log(data,"hhddhhdhd");
      // setUserData(data)
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone })

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error;
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userContact()
  }, [])

  const handeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }

  const HandleForm = async (e) => {
    e.preventDefault();
    const {name, email, phone, message} = userData;
    const res = await fetch('/contact', {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    })
    const data = await res.json();
    if(data.error){
      alert("msg not sent..")
    } else {
      alert("msg send..")
      setUserData({...userData, message:""})
    }
  }


  return (
    <>
      <form method="POST" id="contact_form">
        <div>
          <input type="text" name="name" id="contact_form_name" placeholder="your name"
            value={userData.name}
            onChange={handeInput}
            required="true" />
          <input type="email" name="email" id="contact_form_email" placeholder="your email"
            value={userData.email}
            onChange={handeInput}
            required="true" />
          <input type="number" name="phone" id="contact_form_number" placeholder="your number"
            value={userData.phone}
            onChange={handeInput}
            required="true" />
        </div>

        <div>
          <textarea placeholder="Msg"
            name="message"
            value={userData.message}
            onChange={handeInput}
            cols="30" rows="10"></textarea>
        </div>
        <div>
          <button type="submit" onClick={HandleForm}>Send Msg</button>
        </div>
      </form>
    </>
  )
}

export default Contact
