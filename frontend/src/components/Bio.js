import React,{useEffect,useState,useContext} from 'react';
import { useNavigate } from 'react-router';
import img from '../aman1.webp'
import UserContext from '../context/User/UserContext';


export default function app() {
  const a = useContext(UserContext);
  const {state,setState}=a;


    var Navigate = useNavigate();
    const [user,setUser]=useState({
    });

const callAbout=async()=>{
  try {
    const response = await fetch ('/Bio',{
      mathod:'GET',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        credentals:"include"
      }
    });
    var data = await response.json();
    console.log(data)
    setUser(data)
    setState(true)
    if(response.status!==200){
      throw new Error("HUI")
    }
  } catch (e) {
    console.log(e)
    Navigate("/login")
    window.alert("You need to login first")
  }
}

useEffect(()=>{
  callAbout();
},[]);

  return (
    <>
      {/* <h1 className="text-center mt-5 mb-5">BIO</h1> */}
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="card biocard">
          <img
            // src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"
            src={img}
            className="card-img-top"
            alt="User image"
          />
          <div className="card-body">
            <h5 className="card-title"> {user.firstName} {user.lastName}</h5>
            <p className="card-text">
              {user.course} Developer
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Age: {user.age}</li>
            <li className="list-group-item">Gender: {user.gender}</li>
            <li className="list-group-item">Email: {user.email}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Github
            </a>
            <a href="#" className="card-link">
              linkedin
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
