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

    <section class="vh-100 gradient-custom mb-5">

  <div class="container py-5 h-100">

    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
      <h2 className="text-center ">Coding Bootcamp</h2>
      <h6 className="text-center mb-5">by Aman thokale</h6>
        <div class="card bg-dark text-white">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">
<form method="POST">
              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" name="email" value={user.email} onChange={handleInputs} />
                <label class="form-label ep" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" name="password" value={user.password} onChange={handleInputs} />
                <label class="form-label ep" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" onClick={postData} type="submit">Login</button>

</form>
            </div>

            <div>
              <p class="mb-0">Don't have an account? <Link to="/SignUp" class="text-white-50 fw-bold">Sign Up</Link></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
