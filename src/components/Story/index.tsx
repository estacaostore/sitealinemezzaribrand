import React from 'react'
import { Container } from './styles'

const Story: React.FC = () => {
  return (
    <Container className="sotry section container">
      <div className="story__container grid">
        <div className="story__data">
          <h2 className="section__title story__section-title">Our Story</h2>

          <h1 className="story__title">
            Inspiration Watch of <br /> this year
          </h1>

          <p className="story__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quisquam praesentium consectetur deleniti molestiae vero recusandae
            eaque rerum facilis sequi soluta omnis, doloribus, fugiat temporibus
            itaque alias, porro quos harum.
          </p>

          <a href="#" className="button button--small">
            Detalhes
          </a>
        </div>

        <div className="story__images">
          <img src="/images/home.jpg" alt="" className="story__img" />
          <div className="story__square"></div>
        </div>
      </div>
    </Container>
  )
}

export { Story }
