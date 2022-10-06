import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    min-width: 375px;
    font-size: ${props => props.theme.font.baseSize}px;
    font-family: ${props => props.theme.font.fontFamily};
    padding: 30px 5px;
    background-color: ${props => props.theme.palette.backgroundLight};
  }
`
