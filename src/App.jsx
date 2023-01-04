import React from 'react'


import Header from './componemts/header/header'
import Nav from './componemts/nav/nav'
import About from './componemts/about/About'
import Portfolio from './componemts/portfolio/portfolio'
import Contact from './componemts/contact/contact'
import Experince from './componemts/experince/experince'
import Footer from './componemts/footer/footer'



const App = () => {
  return (
   <>
    <Header />
    <Nav />
    <About />
    <Experince/>
    <Portfolio/>
    <Contact />
    <Footer/>
   </>
  )
}

export default App 