import React, { useEffect, useState } from 'react'
import cloud from '../../assets/images/cloud-network.png'
import layers from '../../assets/images/layersIcon.png'
import lineChat from '../../assets/images/line-chartIcon.png'
import 'aos/dist/aos.css'
import AOS from 'aos'

function AboutProject() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="about">
        <div className="container">
            <div className="about-tabs">
                <div className={ toggleState === 1 ? "about-tab active" : "about-tab"} onClick={() => toggleTab(1)} > 
                    <img src={cloud} className='about-image' alt="" />
                    <h1 className='about-tab_title'>Secure data</h1>
                </div>

                <div className={ toggleState === 2 ? "about-tab active" : "about-tab"} onClick={() => toggleTab(2)} >
                    <img src={layers} className='about-image' alt="" />
                    <h1 className='about-tab_title'>Smooth experience</h1>
                </div>

                <div className={ toggleState === 3 ? "about-tab active" : "about-tab"} onClick={() => toggleTab(3)} >
                    <img src={lineChat} className='about-image' alt="" />
                    <h1 className='about-tab_title'>Quality result</h1>
                </div>  
            </div>
            <div className="about-content">
                <p className={ toggleState === 1 ? "about-subtitle show" : "about-subtitle"}>
                    Secure data service refers to a platform that offers data management and storage while maintaining high-level security standards.
                </p>

                <p className={ toggleState === 2 ? "about-subtitle show" : "about-subtitle"}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi maxime eveniet officiis, ipsum magni quae ex ratione vel     
                </p>

                <p className={ toggleState === 3 ? "about-subtitle show" : "about-subtitle"}>
                    Secure data service refers to a platform that offers data management and storage while maintaining high-level security standards.
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutProject