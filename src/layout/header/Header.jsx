import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


function Header() {
  return (
    <section className='header'>
        <div className="container">
            <div className='header-items'>
                <h3 className='header-text'>Next-gen enterprise</h3>
                <h1 className='header-name_text'>software development company</h1>
                <div className="header-info">
                    <h1 className='header-info_text' >
                    We think {' '}
                    <span className='header-writer'>
                        <Typewriter
                            words={['value', 'new', 'future']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    </h1>
                    <button className="header-btn">Get in touch</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header