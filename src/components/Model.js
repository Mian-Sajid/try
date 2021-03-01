import React from 'react'
//import { Carousel } from 'react-responsive-carousel';
//import Carousel from 'nuka-carousel'
//import Slider from 'infinite-react-carousel';
//import imgg1 from './images/com.jpg';
//import SimpleImageSlider from "react-simple-image-slider";
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import {NavLink} from 'react-router-dom';

function Model() {

 
   
    
    return (
        
       <>
       


<div id="Model">
<h1 className="Headding1">Example Deliverables</h1>

  <div className="Headding">
   <h2>Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TruePlan)</h2>
     
  </div>
<div className="container">
    <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">

        <div className="lazyload-wrapper">
           <section>
           <h3 className="widget-title">
            </h3>
           <div>
        <iframe src="https://my.matterport.com/show/?m=e5Wxtu8Arbx" loading="lazy" allowfullscreen="" allow="vr" width="100%" height="440" frameborder="0">
      </iframe>
     </div>
    </section>
     </div>


     <span className="numeric-character">
</span>
        </div>


        <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="lazyload-wrapper">
           <section>
           <h3 className="widget-title">
            </h3>
           <div>
        <iframe src="https://my.matterport.com/show/?m=DhqzGgT7M1E" loading="lazy" allowfullscreen="" allow="vr" width="100%" height="440" frameborder="0">
      </iframe>
     </div>
    </section>
     </div>
        </div>
    </div>
</div>
     


     <h3 className="text-center pt-5">Immaculate. Impartial. [ESX]</h3>
  
           <div className="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3 offset-sm-5 ">
           <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
       <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
       <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
      <div class="carousel-item active">
      <img class="d-block w-100" src="https://raw.githubusercontent.com/Mian-Sajid/tut/main/public/imges/index5.jpg" width="100%" height="100%" alt="First slide"/>
    </div>
     <div class="carousel-item">
      <img class="d-block w-100" src="https://raw.githubusercontent.com/Mian-Sajid/tut/main/public/imges/index6.jpg"  width="100%" height="100%"  alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://raw.githubusercontent.com/Mian-Sajid/tut/main/public/imges/index7.jpg"  width="100%" height="100%" alt="Third slide"/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="https://raw.githubusercontent.com/Mian-Sajid/tut/main/public/imges/index9.jpg"  width="100%" height="100%" alt="Third slide"/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="https://raw.githubusercontent.com/Mian-Sajid/tut/main/public/imges/index9.jpg"  width="100%" height="100%" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span>
    <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>

</span>
    <span class="sr-only">Previous</span>
  </a>
   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
    <span class="sr-only">Next</span>
  </a> 
   
</div>

           </div>




         <h3 className="text-center pt-5"><NavLink to="/">TruePlan [SKX]</NavLink></h3>
          
           <div className="container">
           <div className="row">
           <div className="col-lg-6 col-md-12 col-sm-12 pt-5">
             <img src="https://raw.githubusercontent.com/Mian-Sajid/tut/main/public/imges/indexmap.png" alt="fs" width="100%" height="90%"/>
            
           </div>

           <div className="col-lg-6 col-md-12 col-sm-12 pt-5">
             
           <img src="https://raw.githubusercontent.com/Mian-Sajid/tut/main/public/imges/indexb.png" alt="fs" width="100%" height="90%"/>

           </div>
           </div>
</div>

       </div>
 
       </>
    )
}

export default Model;
