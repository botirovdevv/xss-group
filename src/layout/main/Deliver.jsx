import React from 'react'
import img from '../../assets/images/software-engineering-company.png'
import Arrow from '../../assets/icons/ArrrowWhite'

function Deliver() {
  return (
    <section className="deliver">
            <div className="deliver-content">
                <img src={img} className='deliver-image' alt="software ingineering" />
                <div className="deliver-text">
                    <div className="container">
                        <h1 className='deliver-title'>Software engineering services delivered </h1>
                        <h2 className='deliver-subtitle'>how and when you need them</h2>
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