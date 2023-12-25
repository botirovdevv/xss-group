import React from 'react'
import Projects from './layout/main/Projects'
import Navbar from './layout/header/Navbar'
import Header from './layout/header/Header'
import Info from './layout/main/Info'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Info/>
      <Projects/>

    </div>
  )
}

export default App