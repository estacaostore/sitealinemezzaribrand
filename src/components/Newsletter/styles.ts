import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.section`
  &.container {
    max-width: 1024px;
    margin-left: ${theme.margins.mb_1_5};
    margin-right: ${theme.margins.mb_1_5};
  }

  .newsletter__bg {
    background-color: ${theme.colors.first_color};
    padding: 3rem 1.5rem;
    text-align: center;
    row-gap: 2.5rem;
  }

  .newsletter__title {
    font-size: ${theme.fonts.h1_font_size};
    color: ${theme.colors.white_color};
    margin-bottom: ${theme.margins.mb_1_5};
  }

  .newsletter__description {
    color: ${theme.colors.white_color};
    font-family: ${theme.fonts.text_font};
  }

  .newsletter__subscribe {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
  }

  .newsletter__input {
    border: none;
    outline: none;
    background-color: hsl(0, 0%, 94%);
    padding: 1.25rem 1rem;
    color: hsl(0, 0%, 15%);
  }

  .button{
    display: inline-block;
    background-color: ${theme.colors.black_color};
    color: #FFFFFF;
    padding: 1.25rem 2rem;
    font-weight: ${theme.fonts.normal_font_size};
    transition: .3s;

    &:hover{
      background-color: ${theme.colors.black_color_alt};
    }
  }

  @media screen and (min-width: 767px) {
    &.section {
      padding: 8rem 0 1rem;
    }

    .newsletter__bg {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      text-align: initial;
      column-gap: 2rem;
      padding: 4.5rem;
    }

    .newsletter__subscribe {
      flex-direction: row;
    }

    .newsletter__input {
      width: 100%;
    }
  }

  @media screen and (min-width: 992px) {
    &.container{
      margin-left: auto;
      margin-right: auto;
    }
  }
`
