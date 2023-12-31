import React, { useEffect } from 'react'
import img from '../../assets/images/software-engineering-company.png'
import Arrow from '../../assets/icons/ArrrowWhite'
import 'aos/dist/aos.css'
import AOS from 'aos'

function Deliver() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <section className="deliver">
            <div className="deliver-content">
                <img src={img} className='deliver-image' alt="software ingineering" />
                <div className="deliver-text">
                    <div className="container">
                        <h1 className='deliver-title' data-aos="fade-up">Software engineering services delivered </h1>
                        <h2 className='deliver-subtitle' data-aos="fade-up">how and when you need them</h2>
                    </div>
                </div>
                <div className="deliver-box">
                    <div className="container">
                        <a href="#" className='deliver-link'>Bring us your challange <Arrow/></a>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Deliver