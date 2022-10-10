import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              portfolioData.socialLinks && portfolioData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <ul className="copyright">
            <li>© Copyright 2022 Ankit Kumar</li>
            <li>Design by <a title="Styleshout" href="#">Ankit Kumar</a></li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}
