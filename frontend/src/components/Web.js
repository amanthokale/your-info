import react from 'react';
import {Link} from 'react-router-dom';

export default function Web(){
  return(
      <>
      <div className="container mt-5 ">
      <h5 className="text-center ">FULL STACK WEB DEVELOPMENT</h5>
      <h6 className="text-center mb-5">by Aman Thokale</h6>
      <div class="accordion " id="accordionExample">
  <div class="accordion-item ">
    <h2 class="accordion-header " id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Front-End Development
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" >
      <div class="accordion-body ">
        <ol>
        <li>Introduction to HTML</li>
        <li>Introduction to CSS</li>
        <li>Introduction to BootStrap</li>
        <li>Introduction to Javascript</li>
        <li>Advanced Javascript</li>
        <li>ReactJs</li>
        </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Back-End Development
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" >
      <div class="accordion-body">
      <ol>
      <li>NodeJs</li>
      <li>ExpressJs</li>
      <li>MongoDB</li>
      <li>Mongoose</li>
      <li>Authentication And Security</li>
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
    <li>Design a single page shopping website using HTML,CSS and Javascript</li>
    <li>Get data using an API in React and display it using MAP function</li>
    <li>Create an Restfull API for CRUD operations in MongoDB</li>
    <li>Create a website which has login/signup functionality and shows the user data</li>
    <li>Deploy your project to Heroku using Heroku Documentaion</li>
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
