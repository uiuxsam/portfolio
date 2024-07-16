import React from 'react'
import AboutSec from './components/Aboutme/AboutSec'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import HomeSec from './components/HomeSection/HomeSec'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Testomainails from './components/Testomainals/Testomainails'
import { BrowserRouter } from "react-router-dom";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HomeSec />
        <AboutSec />
        <Services />
        <Portfolio />
        <Testomainails />
        <Blogs />
        <Contact />
        <Footer />
        </BrowserRouter>
    </div>
  )
}

export default Main