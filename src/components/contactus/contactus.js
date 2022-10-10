import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (

      
      <div id="contacts">
         <h2 style={{marginTop:"30px",color:"white"}}>Contact Us</h2>
      <section id="contact" >
       {/* <h2>Contact Details</h2> */}
<p className="address">
 <span>{portfolioData.name}</span>
   <br></br>
   <span>
   {portfolioData.mobile}
  </span>
  <br></br>
    <span>
   {portfolioData.address}
  </span>
  <br></br>

  <span>{portfolioData.website}</span>
  </p>
          {/* <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div> */}
        
        </section>
        </div>
        );
  }
}
