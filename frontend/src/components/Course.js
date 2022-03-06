import react from 'react';
import {Link} from 'react-router-dom';


export default function Course(){
  return(
    <>
<div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">

<div class="card coursecard" >
  <img src="https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Full stack web development</h5>
    <p class="card-text">Learn to build web apps with Reactjs,Nodejs and MongoDB</p>
    <Link to="/Web" class="btn btn-primary">Check Out</Link>
  </div>
</div>

<div class="card coursecard" >
  <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mobile app development</h5>
    <p class="card-text">Learn to build mobile apps with React Native</p>
    <Link to="/Mobile" class="btn btn-primary">Check Out</Link>
  </div>
</div>

<div class="card coursecard" >
  <img src="https://images.unsplash.com/photo-1561469372-eb082b4f8f44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2t0b3AlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Desktop development</h5>
    <p class="card-text">Learn to build desktop applications with ElectronJs</p>
    <Link to="/Desktop" class="btn btn-primary">Check out</Link>
  </div>
</div>

</div>




    </>
  )
}
