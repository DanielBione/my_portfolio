import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import BlurFilter from './components/blur_filter/blur_filter'

const App = () => {

  return (
    <>
      <Nav />
      <div className='back__blur'>
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  )
}



export default App