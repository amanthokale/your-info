import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom';

export default function app() {
  var Navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender:'',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    course:'',
    notice:''
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };


  const postData = async (e) => {
    e.preventDefault();
    // console.log(user)

    const {
      firstName,
      lastName,
      age,
      gender,
      email,
      mobile,
      password,
      confirmPassword,
      course
    } = user;
    const response = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
      firstName,lastName,age,gender,email,mobile,password,confirmPassword,course})
    });
    const data = response.json().then(()=>{
      Navigate('/Login');
    }).catch((e)=>{
      console.log(response)
      if(response.status===400){
        window.alert("Passwords Not Matching")
      }
    })

    // console.log(data)
    // if (data) {
    //   // window.alert("HUI")
    //   console.log('Registration failed');
    //   console.log("DATA Inserted")

    // } else {
    //   console.log('Successfull');
    //   Navigate('/Login');
    // }
  };
  return (
    <>
      <div className="container">
        <div className="container ">

          <section className="vh-100 gradient-custom mb-5">

            <div className="container py-5 h-100 mb-5">

              <div className="row justify-content-center align-items-center h-100">

                <div className="col-12 col-lg-9 col-xl-7">
                <h2 className="text-center mt-5">Coding Bootcamp</h2>
                <h6 className="text-center mb-5">by Aman thokale</h6>
                  <div className="card shadow-2-strong card-registration bg-dark">
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-white text-center">
                        REGISTRATION
                      </h3>
                      <form method="POST">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                name="firstName"
                                type="text"
                                id="firstName"
                                className="form-control form-control-lg"
                                value={user.firstName}
                                onChange={handleInputs}
                              />
                              <label className="form-label text-white" for="firstName">
                                First Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                name="lastName"
                                type="text"
                                id="lastName"
                                className="form-control form-control-lg"
                                value={user.lastName}
                                onChange={handleInputs}
                              />
                              <label className="form-label text-white" for="lastName">
                                Last Name
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4 d-flex align-items-center">
                            <div className="form-outline datepicker w-100">
                              <input
                                name="age"
                                type="text"
                                className="form-control form-control-lg"
                                id="age"
                                value={user.age}
                                onChange={handleInputs}
                              />
                              <label for="age" className="form-label text-white">
                                Age
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <h6 className="mb-2 pb-1 text-white">Gender: </h6>

                            <div className="form-check form-check-inline">
                              <input
                                name="gender"
                                className="form-check-input"
                                type="radio"
                                id="femaleGender"
                                value="Male"
                                onChange={handleInputs}

                              />
                              <label className="form-check-label text-white" for="gender">
                                Male
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="maleGender"
                                value="Female"
                                onChange={handleInputs}
                              />
                              <label className="form-check-label text-white" for="gender">
                                Female
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="otherGender"
                                value="Other"
                                onChange={handleInputs}

                              />
                              <label className="form-check-label text-white" for="gender">
                                Other
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                name="email"
                                type="text"
                                id="email"
                                className="form-control form-control-lg"
                                value={user.email}
                                onChange={handleInputs}
                              />
                              <label className="form-label text-white" for="email">
                                Email
                              </label>
                            </div>
                            <div className="align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  name="password"
                                  type="password"
                                  id="form3Example4c"
                                  className="form-control"
                                  value={user.password}
                                  onChange={handleInputs}
                                />
                                <label
                                  className="form-label text-white"
                                  for="form3Example4c"
                                >
                                  Password
                                </label>
                              </div>
                            </div>

                            <div className="align-items-center mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  name="confirmPassword"
                                  type="password"
                                  id="form3Example4cd"
                                  className="form-control"
                                  value={user.confirmPassword}
                                  onChange={handleInputs}
                                />
                                <label
                                  className="form-label text-white"
                                  for="form3Example4cd"
                                >
                                  Repeat your password
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                name="mobile"
                                type="tel"
                                id="phoneNumber"
                                className="form-control form-control-lg"
                                value={user.mobile}
                                onChange={handleInputs}
                              />
                              <label className="form-label text-white" for="phoneNumber">
                                Phone Number
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-12">
                            <select
                              name="course"
                              className="select form-control-lg text-white bg-dark"
                              onChange={handleInputs}
                            >
                              <option value="" >
                                Choose option
                              </option>
                              <option value="Javascript">Javascript</option>
                              <option value="Python">Python</option>
                              <option value="Java">Java</option>
                            </select>
                            <label className="form-label select-label text-white ms-3">
                              Choose option
                            </label>
                          </div>
                        </div>

                        <div className="d-flex">
                          <div className="mt-4 pt-2">
                            <input
                              className="btn btn-primary btn-lg"
                              type="submit"
                              value="Submit"
                               onClick={postData}
                            />
                          </div>
                          <div className="mt-4 pt-2 ms-3">
                            <Link className="btn btn-success btn-lg" to="/login">
                              Login
                            </Link>

                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
