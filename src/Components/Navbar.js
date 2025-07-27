import React, { Component } from 'react'
import {Link} from "react-router";
const Navbar=(props)=>  {

  
    


    return (
      <div>
        <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.back1} bg-${props.back1}`}>
  <Link className="navbar-brand" to="/">NewsHub</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
      
    </span>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
   
       
       <li className="nav-item"> <Link className="nav-link" to="/business">Buisness</Link></li> 
       <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li> 
        <li className="nav-item"> <Link className="nav-link" to="/general">General</Link></li> 
        <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li> 
        <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li> 
        <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li> 
        <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li> 
        
    </ul>
  </button>
                                           
  <div className="collapse navbar-collapse"  id="navbarSupportedContent">
    
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
   
       
       <li className="nav-item"> <Link className="nav-link" to="/business">Buisness</Link></li> 
       <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li> 
        <li className="nav-item"> <Link className="nav-link" to="/general">General</Link></li> 
        <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li> 
        <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li> 
        <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li> 
        <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li> 
        
    </ul>
      <button type="button"  onClick={props.togglemode1}  class="btn btn-outline-dark bg-success text-danger">{props.text1}</button>
     
    
  </div>
</nav>
      </div>
    )
}
export default Navbar
