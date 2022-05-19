import React from 'react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from './styles'

const Testimonial: React.FC = () => {
  return (
    <Container className="testimonial section container">
      <div className="testimonial__container grid">
        <Swiper
          className="swiper swiper-wrapper"
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          mousewheel={true}
          pagination={true}
          spaceBetween={20}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide key={1} className="testimonial__card swiper-slider">
            <div className="testimonial__quote">
              <i className="ri-whatsapp-line"></i>
            </div>

            <p className="testimonial__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              consequatur molestiae iste, neque sapiente repudiandae asperiores
              veniam voluptatibus omnis qui error atque, earum expedita
              veritatis. Modi soluta eius in repudiandae?
            </p>

            <h3 className="testimonial__date">March 27. 2022</h3>

            <div className="testimonial__perfil">
              <img
                src="https://avatars.githubusercontent.com/u/4048207?v=4"
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Anderson</span>
                <span className="testimonial__perfil-detail">Gerente TI</span>
              </div>
            </div>
          </SwiperSlide>

          <div className="swiper-button-next">
            <i className="ri-arrow-right-line"></i>
          </div>

          <div className="swiper-button-prev">
            <i className="ri-arrow-left-line"></i>
          </div>

        </Swiper>

        <div className="testimonial__images">
          <div className="testimonial__square"></div>
          <img src="/images/testimonial.jpg" alt="" className="testimonial__img" />
        </div>

      </div>
    </Container>
  )
}

export { Testimonial }
