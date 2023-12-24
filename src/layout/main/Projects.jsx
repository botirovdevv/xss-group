import React from 'react'

  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Autoplay, Pagination } from 'swiper/modules';
  import { swiperData } from '../../data/swiperData';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


function Projects() {
  return (
    <section className='projects'>
    <div>
      <div className="container">
        <h1 className='projects-title'>Latest projects</h1>
      </div>
      
      <Swiper
            slidesPerView={3}
            spaceBetween={100}
            breakpoints={
              {
                280: {
                  slidesPerView: 1,
                  spaceBetween: 70,
                },

                500: {
                  slidesPerView: 2,
                  spaceBetween: 70
                },

                910: {
                  slidesPerView: 3,
                  spaceBetween: 70
                },

                1200: {
                  slidesPerView: 3,
                  spaceBetween: 100
                }
              }
            }
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {
              swiperData.map((item, key) => (
                  <SwiperSlide  key={key}>
                  <img src={item.img} className='swiper-img' alt="image" />
                  <h1 className='swiper-card__title'>{item.name}</h1>

                  <div className="swiper-items">
                    <h1 className='swiper-items__title'>{item.title}</h1>
                    <p className='swiper-items__year'>{item.year}</p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>

    </div>

    </section>

  )
}

export default Projects