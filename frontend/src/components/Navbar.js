import React,{useEffect,useState,useContext} from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import UserContext from '../context/User/UserContext';


const Navbar = () => {
  const a = useContext(UserContext);
  const {state,setState}=a;

  var Navigate = useNavigate();
  const [user,setUser]=useState({
  });

const auth=async()=>{
try {
  const response = await fetch ('/logout',{
    mathod:'GET',
    headers:{
      "Content-Type":"application/json",
    }
  });
  console.log(response)
  if(response.status===200){
    setState(false)
    Navigate('/login')
    window.alert("Logout Successfull")

  }
  else{
    throw new Error("HUI")
  }
} catch (e) {
  console.log(e)
  window.alert("Need to login first")
}
}


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            AT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {state===false?<li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/Login"
                >
                  Login
                </Link>
              </li>:""}

              <li className="nav-item">
                <Link className="nav-link" to="/Bio">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>

            </ul>


              {state===true?<button className="btn btn-danger ms-2" onClick={auth} type="submit">
                Logout
              </button>:""}

          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
