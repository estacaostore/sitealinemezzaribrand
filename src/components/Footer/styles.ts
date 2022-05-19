import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.footer`
  .container {
    max-width: 1024px;
    margin-left: ${theme.margins.mb_1_5};
    margin-right: ${theme.margins.mb_1_5};
  }
  .footer__container {
    row-gap: 2rem;
    border-bottom: 1px solid ${theme.colors.body_color};
    padding-bottom: 3rem;
  }

  .footer__title {
    font-size: ${theme.fonts.h2_font_size};
    margin-bottom: ${theme.margins.mb_1_5};
  }

  .footer__list,
  .footer__links {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
  }

  .footer__link {
    color: ${theme.colors.text_color};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: ${theme.colors.title_color};
    }
  }

  .footer__icon-link {
    font-size: 1.25rem;
  }

  .footer__social {
    display: flex;
    column-gap: 1rem;
  }

  .footer__social-link {
    font-size: 1.25rem;
    color: ${theme.colors.text_color};

    &:hover {
      color: ${theme.colors.title_color};
    }
  }

  .footer__copy {
    display: block;
    margin: 3.5rem 0 1rem 0;
    text-align: center;
    font-size: ${theme.fonts.small_font_size};
  }

  @media screen and (max-width: 320px) {
    .container {
      margin-left: ${theme.margins.mb_1};
      margin-right: ${theme.margins.mb_1};
    }
  }

  @media screen and (min-width: 576px) {
    .footer__container {
      grid-template-columns: (2, 1fr);
    }
  }

  @media screen and (min-width: 767px) {
    .footer__container {
      grid-template-columns: repeat(4, max-content);
      justify-content: space-between;
    }

    .footer__title {
      font-size: ${theme.fonts.h3_font_size};
    }
  }

  @media screen and (min-width: 1024px) {
    .container {
      margin-left: auto;
      margin-right: auto;
    }
  }
`
