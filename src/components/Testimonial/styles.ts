import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.section`
  &.container {
    max-width: 1024px;
    margin-left: ${theme.margins.mb_1_5};
    margin-right: ${theme.margins.mb_1_5};
  }

  .testimonial__container {
    row-gap: 4rem;
  }

  .testimonial__quote {
    display: inline-flex;
    background-color: ${theme.colors.card_color};
    padding: 0.5rem 0.75rem;
    font-size: 1.5rem;
    color: ${theme.colors.first_color};
    box-shadow: 0 4px 12px hsla(0, 0%, 20%, 0.1);
    margin-bottom: ${theme.margins.mb_2};
  }

  .testimonial__description {
    margin-bottom: ${theme.margins.mb_1};
  }

  .testimonial__date {
    font-size: ${theme.fonts.normal_font_size};
    margin-bottom: ${theme.margins.mb_2};
  }

  .testimonial__perfil {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 7rem;
  }

  .testimonial__perfil-img {
    width: 60px;
    height: 60px;
    border-radius: 3rem;
  }

  .testimonial__perfil-data {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .testimonial__perfil-name {
    font-size: ${theme.fonts.h3_font_size};
    font-weight: ${theme.fonts.normal_font_size};
    color: ${theme.colors.title_color};
  }

  .testimonial__perfil-detail {
    font-size: ${theme.fonts.small_font_size};
  }

  .testimonial__images {
    position: relative;
  }

  .testimonial__img,
  .testimonial__square {
    width: 250px;
  }

  .testimonial__square {
    height: 320px;
    background-color: ${theme.colors.first_color};
    margin-left: auto;
  }

  .testimonial__img {
    position: absolute;
    right: 2rem;
    top: 3rem;
  }

  .testimonial-swiper {
    margin-left: initial;
    margin-right: initial;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: initial;
    bottom: 5%;
    width: initial;
    height: initial;
    background-color: ${theme.colors.card_color};
    box-shadow: 0 4px 12px hsla(0, 0%, 20%, 0.1);
    padding: 0.25rem;
    font-size: 1.5rem;
    color: ${theme.colors.first_color};

    &:after {
      content: '';
    }
  }

  .swiper-button-next {
    right: initial;
    left: 4rem;
  }

  @media screen and (max-width: 320px) {
    &.container {
      margin-left: ${theme.margins.mb_1};
      margin-right: ${theme.margins.mb_1};
    }

    .testimonial__square,
    .testimonial__img {
      width: 180px;
    }

    .testimonial__square {
      height: 180px;
    }
  }

  @media screen and (min-width: 767px) {
    &.section {
      padding: 8rem 0 1rem;
    }

    .testimonial__container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      padding-bottom: 4rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .testimonial__container {
      column-gap: 13rem;
    }

    .testimonial__square,
    .testimonial__img {
      width: 450px;
    }

    .testimonial__square {
      height: 450px;
    }

    .testimonial__img {
      right: 5rem;
      top: 5rem;
    }
  }
`
