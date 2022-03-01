import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router';

export default function app() {

  var Navigate = useNavigate();
    const [user,setUser]=useState({message:""});

  useEffect(()=>{
    getData();
  },[])


  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setUser({...user,[name]:value})
    console.log(user)
  }

  const getData =async(e)=>{
    try {
      const response = await fetch('/Contact',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          credentals:"include"
        },
      })
      const data =await response.json();
      console.log(data)
      setUser({firstName:data.firstName,lastName:data.lastName,email:data.email,message:""})
      console.log(user);
      if(response.status!==200){
        throw new Error("HUI")
      }
    } catch (e) {
      console.log(e)
      Navigate("/login")
      window.alert("You need to login first")
    }
  }

const postData =async(e)=>{
try {
  e.preventDefault();
  console.log(user);
  const {firstName,lastName,email,message}=user;
  const response = await fetch ('/Contact',{
    method:"post",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      firstName,lastName,email,message
    })
  })
  const data = response.json();
  if(response.status === 200){
    window.alert("Successfull")
    setUser({firstName:"",lastName:"",email:"",message:""})
  }
  else if(response.status===401){
    window.alert("Cannot send request: 'Fields are missing'")
  }
} catch (e) {
  window.alert("Request Not Send")
}
}




  return (
    <>
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Contact Us</h1>
      <div className="container d-flex justify-content-center align-items-center contactcard">
        <form method="post">
          <div className="form-outline mb-4 contactcard">
            <input type="text" id="form4Example1" className="form-control" name="firstName" value={user.firstName} onChange={handleInput}/>
            <label className="form-label" htmlFor="form4Example1">
              First Name
            </label>
          </div>
          <div className="form-outline mb-4">
            <input type="text" id="form4Example1" className="form-control" name="lastName" value={user.lastName} onChange={handleInput} />
            <label className="form-label" htmlFor="form4Example1">
              Last Name
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form4Example2" className="form-control" name="email" value={user.email} onChange={handleInput} />
            <label className="form-label" htmlFor="form4Example2">
              Email address
            </label>
          </div>



          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form4Example3"
              rows="4"
              name="message"
              value={user.message}
              onChange={handleInput}
            ></textarea>
            <label className="form-label" htmlFor="form4Example3">
              Message
            </label>
          </div>


          <button type="submit" onClick={postData} className="btn btn-primary btn-block mb-4">
            Send
          </button>
        </form>
      </div>
      </div>

    </>
  );
}
