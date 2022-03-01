import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import UserContext from '../context/User/UserContext';


export default function Login() {

  const a = useContext(UserContext);
  const {state,setState}=a;
  setState(false)
  var Navigate = useNavigate();
  const [user,setUser]=useState({
    email:'',
    password:''
  });
let name,value;
  const handleInputs=(e)=>{
     name = e.target.name;
     value = e.target.value;
    setUser({...user,[name]:value})
  }
  const postData = async (e) => {
    e.preventDefault();
    // console.log(user)

    const {
      email,
      password
    } = user;
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
      email,password})
    });
    // const data = await response.json()
    if(response.status===200){
        setState(true)
      window.alert("Login Successfull")

    Navigate('/Bio');
  }else if(response.status===400){
    window.alert("Invalid Credentials")

  }

  };
  return (
    <>
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-5">LOGIN</h2>

        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form action="/login" method="POST">
                  <div className="form-outline mb-4">
                    <input
                      name="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      value={user.email}
                      onChange={handleInputs}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Username
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      name="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      value={user.password}
                      onChange={handleInputs}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" onClick={postData} className="btn btn-primary btn-lg">
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{' '}
                      <Link to="/SignUp" className="link-danger">
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </section>
      </div>
    </>
  );
}
