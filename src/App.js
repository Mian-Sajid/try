
import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import Contact from './components/Contact'
import FeeStructer from './components/FeeStructer'
import Grounddata from './components/Groundata'
import HowWork from './components/HowWork'
import Model from './components/Model'
//import Recaptcha from 'react-recaptcha';
//import Header from './components/Header'
//import ImageCom from './components/ImageCom'
//import About from './components/About'
//import Contact from './components/Contact'
//import Home from './components/Groundata'
import Navbar from './Navbar/Navbar'
//import Grounddata from './components/Groundata'



 const App = ()=> {
 
  

  return (

    
    <>
    <Router>
     <Navbar/>
   
     <div id="APP">
   
      <video autoPlay loop muted
      
     style={{
      
       width:"100%",
       height:"100%",
      

       objectFit:"cover",
      
       zIndex:"-1"
     }}
     >
    <source src="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4" alt="sd"/>
    <h1 className="text-danger">jksrk</h1>
    
    
     </video> 
     </div>
     <div className="col-lg-12 col-md-9 col-sm-12">
     <h1 className="hy">Impartial, Remote,<br/> 3rd-Party,<br/>
           Estimating Engine</h1>
           </div>


       {/* <Header/>   */}
       <Grounddata/>
       <HowWork/>

         <FeeStructer/> 

           <Model/>
           <Contact/>

    
       {/* <ImageCom/> */}

     

       <div class="footer">
    <div class="container">
    <div class="row">
    <div class="col-md-6 col-sm-12">
    <p>mpartial, a 4D Schematics Company. Copyright 2020 all rights reserved.</p>
</div>
   
  <div class="col-md-6 col-sm-12">
     
    <ul class="social-links">
     <li>
    <a target="_blank" href="https://www.facebook.com/mpartial1/" aria-label="Facebook" rel="noopener">
    <i class="fa fa-facebook" aria-hidden="true"></i>
    </a>
     </li>
</ul>


</div>
</div>
</div>
</div>
     
     </Router>
    
    
    </>
    
  )
  
}


export default App;