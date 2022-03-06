import react from 'react';
import {Link} from 'react-router-dom';

export default function Desktop(){
  return(
      <>
      <div className="container mt-5 ">
      <h5 className="text-center ">DESKTOP DEVELOPMENT</h5>
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
        Getting started with ElectronJs
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" >
      <div class="accordion-body">
      <ol>
      <li>Custom menu in elctron</li>
      <li>Inter Process Communication</li>
      <li>Working with modules</li>
      <li>More on ElectronJs</li>
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
    <li>Todo app in electronjs</li>
    <li>Build a calculator using electronjs</li>
    <li>Build an login/signup interface using electronjs</li>
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
