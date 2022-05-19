import React from 'react'
import { Container } from './styles'

const Newsletter: React.FC = () => {
  return (
    <Container className="newsletter section container">
      <div className="newsletter__bg grid">
        <div>
          <h2 className="newsletter__title">
            Subscribe Our <br /> Newsletter
          </h2>

          <p className="newsletter__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
            adipisci. Exercitationem aperiam quam maxime sequi ab reprehenderit
            quas eligendi facilis blanditiis?
          </p>
        </div>

        <form action="" className="newsletter__subscribe">
          <input type="email" name="email" className="newsletter__input" />

          <button className="button">SUBSCRIBE</button>
        </form>
      </div>
    </Container>
  )
}

export { Newsletter }
