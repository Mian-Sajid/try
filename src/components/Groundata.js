import React from 'react'
import ImageSlider from "react-image-comparison-slider";
import ReactCompareImage from 'react-compare-image';
import { red } from '@material-ui/core/colors';
//import Video from './Video';


function Grounddata() {
    return (
        <>
        <div id="ground">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <h2 className="Groundh2">GROUND-TRUTH<br/> DATA EVERYONE<br/> TRUSTS</h2>
                </div>

                <div className="col-lg-6 col-md-8 col-sm-12">
                    <h6 className="Groundtext">We have combined the best-of-breed technology platforms with an
                     eye towards relieving you of administrative burden. Matterport 3D 
                     scans augmented by TruePlan are used to generate consistent Xactimate
                      sheets that are delivered in accord with Actionable Insights
                       compliance rule sets. Each mpartial is produced with full 
                       transparency, unprecedented forensic photography, and infallible
                        geospatial data that collectively result in rapid approvals.</h6>
                </div>
            </div>
        </div>
          {/* <div
        style={{
              width:'60%',
              height:'70vh',
              marginTop:'10vh',
              marginBottom:'5vh',
              marginLeft:"30vh",
              
              
          }}
          >
        
          
            <ImageSlider
           
                image1="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                image2="https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

            />
            </div> 

            <button className="buttt">Button</button> */}
        <div className="imge col-lg-11 col-md-11 col-sm-12">
         <div className="img-fluid"
         style={{
            width:'80%',
            height:'50%',
            marginTop:'10vh',
            marginLeft:'30vh',

            
         }}
         >
        <ReactCompareImage leftImage="./imges/indexpost.jpg "  rightImage="./imges/indexpre.jpg" />;
        </div>
        </div>
           
        <button className="buttt">Button</button>
        </div> 
        </>
        
    )
}

export default Grounddata;