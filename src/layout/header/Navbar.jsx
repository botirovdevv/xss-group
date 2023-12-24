import React, { useState } from 'react'
import Translator from '../../assets/icons/Translator'
import logo from '../../assets/images/xss_logo-black.jpg'

function Navbar() {
    const [active, setActive] = useState("navbar-links")
    const [toggleIcon, setToggleIcon] = useState("navbar-toggler")

    const navToggleClose = () => {
        setActive('navbar-links');
        setToggleIcon('navbar-toggler')
    }

    const navToggle = () => {
         if(active === "navbar-links"){
            setActive('navbar-links navbar-active')
        } else{
            setActive('navbar-links')
        }

        toggleIcon === 'navbar-toggler' ? setToggleIcon('navbar-toggler toggle') : setToggleIcon('navbar-toggler')
    }

    const [modal, setModal] = useState(false)

    const modalToggle = () => {
        setModal(!modal)
    }

  return (
    <nav className='navbar'>
        <div className="navbar-container">
            <div className='navbar-logo'>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className={active}>
                <h1 className='navbar-mobile_logo'>XSS GROUP</h1>
                <a href="#" className='navbar-link'>Home</a>
                <a href="#" className='navbar-link'>Service</a>
                <a href="#" className='navbar-link'>Work</a>
                <a href="#" className='navbar-link'>Team</a>
                <a href="#" className='navbar-link'>Company</a>
                <a href="#" className='navbar-link'>Contact</a>

                <div className="navbar-items">
                    <button className='navbar-translate' onClick={modalToggle}>
                        <Translator/>
                    </button>
                    <div className={modal ? "navbar-modal show" : "navbar-modal"}>
                        <a href="#" className='navbar-modal_link'>ENG <span> / </span></a>
                        <a href="#" className='navbar-modal_link'> UZB <span> / </span></a>
                        <a href="#" className='navbar-modal_link'> RUS</a>
                    </div>
                    <button className='navbar-contact'>
                        Contact us
                    </button>
                </div>
            </div>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar