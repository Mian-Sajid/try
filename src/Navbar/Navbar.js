import React,{useState} from 'react';
//import logo from './images/index11.png';
import {Link} from 'react-scroll';



const Navbar = ()=> {

  const [nav , Setnav] =useState(false);

  const changeBackground =()=>{
    if(window.scrollY >=50){
      Setnav(true);
    }
    else{
      Setnav(false);
    }
  }
  window.addEventListener('scroll',changeBackground);
  return (
    <>
     
     {/* <nav className={nav ? "nav active" :"nav"}>
       <Link to="#" className="logo">
         <img src="./imges/index11.png" alt="ds"/>
       </Link>
       <input className="menu-btn" type="checkbox" id="menu-btn"/>
       <label className="menu-icon" for="menu-btn">
         <span className='nav-icon'></span>
       </label>


       <ul className="menu">
       
         <li><Link to="ground" smooth={true} duration={2000}>Ground Truth</Link></li>
         <li><Link to='Howwork' smooth={true} duration={2000}>HowItWork</Link></li>
         <li><Link to="Feess" smooth={true} duration={2000}>FeeStructure</Link></li>
         <li><Link to="Model" smooth={true} duration={2000}>ExampleDelverables</Link></li>
         <li><Link to="#">SubmissionPortal</Link></li>
         <li><Link to="contactc" smooth={true} duration={2000}>ContactUs</Link></li>
         <button className="butt">SignIn</button>
       </ul>
     </nav>  */}
      
     {/* <nav className={nav ? "nav active fixed-top" :"nav navbar-expand-lg"}> */}
     <nav className= "nav navbar active navbar-expand-lg fixed-top">
     <div className="container">
  <Link className="navbar-brand" to="APP" smooth={true} duration={2000}> <img src="./imges/index11.png" alt="ds"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span ><i class="fa fa-bars" aria-hidden="true"></i>
</span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
     
      <li className="nav-item">
         <Link className="nav-link" to='ground' smooth={true} duration={2000}>Ground The Truth</Link> 
        {/* <a className="nav-link" href="#">Ground The Truth</a> */}
      </li>

      <li className="nav-item">
       <Link className="nav-link"  to='Howwork' smooth={true} duration={2000}>How Its Work</Link> 
       {/* <a className="nav-link" href="#">How Its Work</a> */}
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="Feess" smooth={true} duration={2000}>Fee Structure</Link> 
      {/* <a className="nav-link" href="#">Fee Structure</a> */}
        
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="Model" smooth={true} duration={2000}>Example Delverables</Link>
      {/* <a className="nav-link" href="#">Example Delverables</a> */}
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="#">Submission Portal</Link> 
      {/* <a className="nav-link" href="#">Submission Portal</a> */}
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="contactc" smooth={true} duration={2000}>Contact Us</Link>
      {/* <a className="nav-link" href="#">Contact Us</a> */}
      </li>
        
        <li>
        <button className="butt">SignIn</button>
        </li>
      
    </ul>
    
    
    
  </div>
  </div>
</nav> 
      
    </>
  )
}

export default Navbar;
