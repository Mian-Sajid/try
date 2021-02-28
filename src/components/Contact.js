import React from 'react'

function Contact() {
    return (
        <>
           
   

      <div id="contactc">
      <div className="container">
      <h1 className="Contatct">Contact Us</h1>
      <div className="row">
      
     
      <div className="col-lg-6 col-10 col-sm-12">
          <form>
          
          <div className="form-group">
    <input type="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <input type="mobile" className="form-control" id="exampleInputPassword1" placeholder="Cell"/>
  </div>
  
     {/* <button type="submit" className="btn btn-primary">Submit</button> */}

</form>
</div>
   <div className="col-lg-6 col-md-12 col-sm-12">
     <form>
   <div class="form-group contactt">
    
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Write Message"></textarea>
  </div>
  </form>
   </div>

              
</div>

           
<div className="lazyload-wrapper">
<div className="captcha_box">
<div>

 <div style={{width: '304px' , height:'78px'}}> 
<div>
<iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lc46PQUAAAAAMEJkx-a4pfm2t5DMXhlV0Xaaix2&amp;co=aHR0cHM6Ly9tcGFydGlhbC5pbzo0NDM.&amp;hl=en&amp;type=image&amp;v=jxFQ7RQ9s9HTGKeWcoa6UQdD&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=c4oi61tzqkjc" role="presentation" name="a-c5ac5hwunqjz" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" width="304" height="78" frameborder="0">
</iframe>
</div>
<textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '220px', height: '40px', border: 'black', margin: '30px' , padding: '0px', resize: 'none', display: 'none'}}>
</textarea>
</div>
{/* <iframe style={{display: 'none'}}>
</iframe> */}
</div>
</div>
 </div>

      <button className="robot disabled" type="submit">Submit</button>



</div>
</div>
        </>
    )
}

export default Contact;
