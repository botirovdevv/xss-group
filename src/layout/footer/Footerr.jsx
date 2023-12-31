import React from 'react'
import logo from '../../assets/images/logo.png'
import Telegram from '../../assets/icons/Telegram'
import Instagram from '../../assets/icons/Instagram'
import GitHub from '../../assets/icons/GitHub'

function Footerr() {
  return (
    <section className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-items">
                    <img src={logo} className='footer-logo' alt="xss group" />
                    <h1 className='footer-title'>We are an enterprise software development company that is inspired by the future</h1>
                </div>
                <div className="footer-info">
                    <div className="footer-text">
                        <span className='footer-info_title'>Offers:</span>
                        <h1 className='footer-info_subtitle'>Web development</h1>
                        <h1 className='footer-info_subtitle'>Telgram bots</h1>
                        <h1 className='footer-info_subtitle'>Ui/UX design</h1>
                    </div>
                    <div className="footer-contact">
                        <a className='footer-link' href="mailto: xssgroup@gmail.com">xssgroup@gmail.com</a>
                        <a className='footer-link' href="tel: +998990560621">+998-94-320-00-49</a>

                        <div className="footer-social">
                            <a href="https://t.me/xss_group">
                                <Telegram/>
                            </a>

                            <a href="https://instagram.com/xss.group">
                                <Instagram/>
                            </a>

                            <a href="">
                                <GitHub/>
                            </a>
                        </div>
                    </div>

                </div>
                 <div className="footer-name">
                    <a href="/" className='footer-name_title'>©2023 XSS Group</a>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Footerr