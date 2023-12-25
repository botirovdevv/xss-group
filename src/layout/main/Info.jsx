import React, { useState } from 'react'
import Icon1 from '../../assets/icons/Icon1'
import Minus from '../../assets/icons/Minus'
import Plus from '../../assets/icons/PlusIcon'
import { accardionData } from '../../data/accardionData'

function Info() {
  const [select, setSelect] = useState(null)

  const toggle = (i) => {
    if(select === i){
      setSelect(null)
    }

    setSelect(i)
  }

  return (
    <section className="info">
      <div className="container">
        <h1 className="info-title">How we can help you</h1>
        {
          accardionData.map((item, i) => (
            <div className="info-accardion" onClick={() => toggle(i)}>
              <div className="info-icon">
                <Icon1/>
              </div>
              <div className="info-accardion_content">
                <div className="info-text">
                  <h1 className='info-accardion_title'>{item.title}</h1>
                  <button className='info-accardion-close' onClick={() => toggle(i)}>{ select === i ? <Minus/> : <Plus/>}</button>
                </div>
                <div className={ select === i  ? 'info-body show' : 'info-body'}>
                    <p className="info-subtitle" >
                      {item.subtitle}
                    </p>
                </div>

              </div>
            </div>

          ))
        }
      </div>
    </section>
  )
}

export default Info