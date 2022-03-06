import react from 'react';
import {Link} from 'react-router-dom';

export default function Mobile(){
  return(
      <>
      <div className="container mt-5 ">
      <h5 className="text-center ">MOBILE APP DEVELOPMENT</h5>
      <h6 className="text-center mb-5">by Aman Thokale</h6>
      <div class="accordion " id="accordionExample">
  <div class="accordion-item ">
    <h2 class="accordion-header " id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Learning Javascript
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" >
      <div class="accordion-body ">
        <ol>
        <li>Introduction to Javascript</li>
        <li>Advanced Javascript</li>
        <li>Understanding Ecmascript</li>
        </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Getting started with React Native
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" >
      <div class="accordion-body">
      <ol>
      <li>Installing Android studio and Xcode</li>
      <li>RN Basics</li>
      <li>Working with libraries</li>
      <li>More on React Native</li>
      </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Projects
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" >
    <div class="accordion-body">
    <ol>
    <li>Design a shopping app using in React Native</li>
    <li>Get users data using an API in React Native and display all the users</li>
    <li>Create a app which has login/signup functionality and shows the user data</li>
    </ol>
    </div>
    </div>
  </div>
</div>
<button to="/Web" class="btn btn-success mt-3">Enroll now</button>
<Link to="/Course" class="btn btn-primary ms-2 mt-3">Back to courses</Link>
</div>
      </>
    )
}
