// import React from 'react'
// //import Slider from 'react-rangeslider'

// function FeeStructer() {
    
  

//     return (
//         <>
//         <div id="fees">
//        <div className="container">
//        <h1 className="Workh2">Waterfall Fee Structure</h1>
//            <div className="row">
//                <div className="col-lg-8 col-md-12 col-sm-12">
                  


              

//  <div class="slider css-8806o7-WaterFall">

// <div class="rangeslider rangeslider-horizontal" aria-valuemin="0" aria-valuemax="1000000" aria-valuenow="0" aria-orientation="horizontal">
// <div class="rangeslider__fill" style={{width: 35.5}}></div>
// <div class="rangeslider__fill" style={{width: 17.5}}>
// </div>
// <div class="rangeslider__handle" style={{left: 17.5}} tabindex="0">
// <div class="rangeslider__handle-tooltip">
// <span>
// <div class="slider_tooltip_price">
// $150k
// </div>
// <div class="slider_tooltip_text">
// Estimate Grand Total
// </div>
// </span>
// </div>
// <div class="rangeslider__handle-label">
// </div>
// </div>
// <ul class="rangeslider__labels">
// </ul>
// </div>
// <ul class="css-wrrl2p-WaterFall">
// <li>$0</li>
// <li>$250,000</li>
// <li>$500,000</li>
// <li>$750,000</li>
// <li>$1M+</li>
// </ul></div>

//                </div>
//            </div>
//        </div>
//        </div>
//         </>
//     )
// }

//  export default FeeStructer;



// import React, { Component } from 'react'
// import Slider from 'react-rangeslider'

// class FeeStructer extends Component {
//   constructor (props, context) {
//     super(props, context)
//     this.state = {
//       value: 10
//     }
//   }

//   handleChangeStart = () => {
//     console.log('Change event started')
//   };

//   handleChange = value => {
//     this.setState({
//       value: value
//     })
//   };

//   handleChangeComplete = () => {
//     console.log('Change event completed')
//   };

//   render () {
//     const { value } = this.state
//     return (
//         <>
//       <div className='slider'>
//         <Slider
//           min={0}
//           max={100}
//           value={value}
//           onChangeStart={this.handleChangeStart}
//           onChange={this.handleChange}
//           onChangeComplete={this.handleChangeComplete}
//         />
//         <div className='value'>{value}</div>
//       </div>
//       <div class="slider css-8806o7-WaterFall">
// {/* <div class="rangeslider rangeslider-horizontal" aria-valuemin="0" aria-valuemax="1000000" aria-valuenow="0" aria-orientation="horizontal"> */}
// <div class="rangeslider__fill" style={{width: 17.5}}>
// </div>
// <div class="rangeslider__handle" style={{left: 17.5}} tabindex="0">
// <div class="rangeslider__handle-tooltip">
// <span>
// <div class="slider_tooltip_price">
// $0
// </div>
// <div class="slider_tooltip_text">
// Estimate Grand Total
// </div>
// </span>

// <div class="rangeslider__handle-label">
// </div>
// </div>
// <ul class="rangeslider__labels">
// </ul>
// </div>
// <ul class="css-wrrl2p-WaterFall">
// <li>$0</li>
// <li>$250,000</li>
// <li>$500,000</li>
// <li>$750,000</li>
// <li>$1M+</li>
// </ul></div>
//       </>
//     )
//   }
// }

// export default FeeStructer;

import React, {useState} from 'react';
//import { Link } from 'react-router-dom';


const PriceSlider = () => {
    // price hook
    const [price, setPrice] = useState('0');

    return (
        <>
        <div id="Feess">
        <h2 class="section_title_text">Waterfall Fee Structure
        </h2>
    
               <div className="slideBlock">  
            <div className="strack">
            <div className="slideProgress" style={{"width": (price/400*100) + "%"}}></div>
                <input
                    onChange={(e) => setPrice(
                        e.target.value >= 0 && e.target.value <= 400 ? e.target.value : '100'
                    )}
                    value={price}
                    type="range"
                    name="range"
                    id="range"
                    min="0" max="400" />
                <div className="Price">${price}<br/>Estimate Price<br/> Total</div>
             </div>
             
            
             <ul className="css-wrrl2p-WaterFall">
           <li>$0</li>
            <li>$250,000</li>
             <li>$500,000</li>
              <li>$750,000</li>
              <li>$1M+</li>
              </ul>
                </div>  
              <div className="paragraph">
            <p className="text-center">
            Drag the slider around based on what you 
            think it will cost to repair the property.<br/>
            Move forward based on the estimated fee structure below.
            </p>
            </div>  
            <div className="imput_fields custom-imput-fields">
                    <div className="partial_fee_btn">
                    <input className="inpp" type="text" onChange={(e) => setPrice(e.target.value >= 100 && e.target.value <= 400 ? e.target.value : '100')} id="price_prod" name="price_prod" value={price} />
                     <p>Estimate Your Price</p>
                    </div>
                </div>
                <h6 className="text-center pr-5 pt-4">[$750 Minimum]</h6> 
             
            <br /><br />  
            </div>
        </>
    );
}

export default PriceSlider;


            
             
          

