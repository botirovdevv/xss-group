import React from 'react'
import Projects from './layout/main/Projects'
import Navbar from './layout/header/Navbar'
import Header from './layout/header/Header'
import Info from './layout/main/Info'
import Deliver from './layout/main/Deliver'
import AboutProject from './layout/main/AboutProject'
import Contact from './layout/main/Contact'
import Footerr from './layout/footer/Footerr'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Info/>
      <Projects/>
      <Deliver/>
      <AboutProject/>
      <Contact/>
      <Footerr/>
    </div>
  )
}

export default App