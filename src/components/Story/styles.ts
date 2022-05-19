import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.section`
  &.container {
    max-width: 1024px;
    margin-left: ${theme.margins.mb_1_5};
    margin-right: ${theme.margins.mb_1_5};
  }

  .story__container {
    row-gap: 7.5rem;
  }

  .story__title {
    font-size: ${theme.fonts.h1_font_size};
    margin-bottom: ${theme.margins.mb_1};
  }

  .story__description {
    margin-bottom: ${theme.margins.mb_2_5};
  }

  .story__images {
    position: relative;
  }

  .story__img,
  .story__square {
    width: 250px;
  }

  .story__square {
    height: 250px;
    background-color: ${theme.colors.first_color};
  }

  .story__img {
    position: absolute;
    left: 3rem;
    top: -3rem;
  }

  @media screen and (max-width: 320px) {
    .story__square,
    .story__img {
      width: 180px;
    }

    .story__square {
      height: 180px;
    }
  }

  @media screen and (min-width: 767px) {
    .story__container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }

    .story__section-title {
      text-align: initial;
      &::before {
        margin: initial;
      }
    }

    .story__images {
      order: -1;
    }
  }

  @media screen and (min-width: 992px) {
    .section__title {
      font-size: ${theme.fonts.h2_font_size};
    }

    .story__container {
      column-gap: 8rem;
    }

    .story__square,
    .story__img {
      width: 450px;
    }

    .story__square {
      height: 450px;
    }
  }

  @media screen and (min-width: 1024px) {
    &.container {
      margin-left: auto;
      margin-right: auto;
    }

    .story__container {
      column-gap: 13rem;
      padding-top: 3rem;
    }

    .story__img {
      left: 5rem;
      top: -5rem;
    }
  }
`
