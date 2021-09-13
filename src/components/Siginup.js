import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
const Siginup = () => {

  const history = useHistory()
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword:""
  })

  let name, value;
  const handelInput = (e) => {
    name = e.target.name;
    value = e.target.value
    setUser({...user, [name]:value})
  }

  const PostData = async (e) => {
    e.preventDefault();
    const {name, email, phone, work, password, cpassword} = user;
    const res = await fetch("/register",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })

    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert("reg fail..")
      console.log("reg fail..");
    } else {
      window.alert("reg done..")
      console.log("reg dome");
      history.push("/login")
    }
  }


  return (
    <>
      <form method="POST">
        <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Name</label>
          <div className="col-sm-8">
            <input type="text" name="name" className="form-control form-control-sm" id="colFormLabelSm"
            value={user.name}
            onChange={handelInput}
             placeholder="Name" />
          </div>
        </div>

        <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
          <div className="col-sm-8">
            <input type="email" name="email" className="form-control form-control-sm" id="colFormLabelSm"
            value={user.email}
            onChange={handelInput}
             placeholder="Email" />
          </div>
        </div>

        <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">User Phone</label>
          <div className="col-sm-8">
            <input type="number" name="phone" className="form-control form-control-sm" id="colFormLabelSm"
            value={user.phone}
            onChange={handelInput}
             placeholder="user phone" />
          </div>
        </div>

        <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">User Work</label>
          <div className="col-sm-8">
            <input type="text" name="work" className="form-control form-control-sm" id="colFormLabelSm"
            value={user.work}
            onChange={handelInput}
             placeholder="work" />
          </div>
        </div>

        <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Password</label>
          <div className="col-sm-8">
            <input type="password" name="password" className="form-control form-control-sm" id="colFormLabelSm"
            value={user.password}
            onChange={handelInput}
             placeholder="password" />
          </div>
        </div>

        <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">C Password</label>
          <div className="col-sm-8">
            <input type="password" name="cpassword" className="form-control form-control-sm" id="colFormLabelSm"
            value={user.cpassword}
            onChange={handelInput}
             placeholder="c password" />
          </div>
        </div>

        <div className="form-group form-button">
          <input type="submit" name="signin" className="form-submit" value="signin" onClick={PostData}/>
        </div>
      </form>
    </>
  )
}

export default Siginup
