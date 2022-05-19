import React from 'react'
import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <h3 className="footer__title">Our Information</h3>

          <ul className="footer__list">
            <li>Rua Libero Pasini, 769</li>
            <li>(45) 3541-2901</li>
            <li>Santa Terezinha de Itaipu - PR</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Produtos</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Sale
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Todos os produtos
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Vendedoras do Paraná</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                <i className="ri-whatsapp-line footer__icon-link"></i>
                Flaviane
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <i className="ri-whatsapp-line footer__icon-link"></i>
                Jessyca
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <i className="ri-whatsapp-line footer__icon-link"></i>
                Pamela
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Vendedoras de São Paulo</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                <i className="ri-whatsapp-line footer__icon-link"></i>
                Ivone
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <i className="ri-whatsapp-line footer__icon-link"></i>
                Kety
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">About</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Suporte
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Copy Right
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Social</h3>

          <ul className="footer__social">
            <a href="#" className="footer__social-link">
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="ri-pinterest-line"></i>
            </a>
          </ul>
        </div>
      </div>
      <span className="footer__copy">
        &#169; Aline Mezzari Brand. All rigths reserved
      </span>
    </Container>
  )
}

export { Footer }
