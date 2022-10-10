import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import portfolioData from './portfolioData';
import Slider from './components/Sider/Slider';
import Planet from './components/Planet/Planet';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header portfolioData={portfolioData}/>
        <About portfolioData={portfolioData}/>
        <Resume portfolioData={portfolioData}/>
        <Planet />
        <Portfolio portfolioData={portfolioData}/>
        {/* <Testimonials resumeData={resumeData}/> */}
        <Slider />
        <ContactUs portfolioData={portfolioData}/>
        <Footer portfolioData={portfolioData}/>
      </div>
    );
  }
}

export default App;
