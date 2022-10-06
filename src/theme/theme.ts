import { DefaultTheme } from 'styled-components'

const spacingBase = 0.8

export const defaultTheme: DefaultTheme = {
  animationDuration: 0.3,
  spacing: {
    0: 0,
    1: spacingBase * 0.25,
    2: spacingBase * 0.5,
    3: spacingBase,
    4: spacingBase * 1.5,
    5: spacingBase * 3
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  containerMaxWidths: {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140
  },
  font: {
    baseSize: 15,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400
  },
  palette: {
    background: '#fff',
    backgroundLight: 'hsl(0, 0%, 98%)',
    primary: {
      main: 'hsl(180, 62%, 55%)'
    },
    neutral: {
      dark: 'hsl(234, 12%, 34%)',
      light: 'hsl(229, 6%, 66%)',
      veryLight: 'hsl(0, 0%, 98%)'
    }
  },
  typography: {
    h1: {
      fontWeight: 200,
      size: theme => theme.font.baseSize * 1.8,
      lineHeight: 1.3,
      color: theme => theme.palette.neutral.dark,
      margin: theme => `${theme.spacing[1]}rem ${theme.spacing[0]}`
    },
    h2: {
      fontWeight: 600,
      size: theme => theme.font.baseSize * 1.8,
      lineHeight: 1.3,
      color: theme => theme.palette.neutral.dark,
      margin: theme => `${theme.spacing[1]}rem ${theme.spacing[0]}`
    },
    h3: {
      fontWeight: 600,
      size: theme => theme.font.baseSize,
      lineHeight: 1.5,
      color: theme => theme.palette.neutral.dark,
      margin: theme => `${theme.spacing[1]}rem ${theme.spacing[0]}`
    },
    h4: {},
    p: {
      fontWeight: 400,
      size: theme => theme.font.baseSize,
      lineHeight: 1.5,
      color: theme => theme.palette.neutral.light,
      margin: theme => `${theme.spacing[3]}rem`
    },
    'modal.title': {
      fontWeight: 600,
      size: theme => theme.font.baseSize,
      lineHeight: 1.5,
      color: theme => theme.palette.neutral.dark,
      margin: '0'
    },
    'modal.subtitle': {
      fontWeight: 400,
      size: theme => theme.font.baseSize * 0.8,
      lineHeight: 1.5,
      color: theme => theme.palette.neutral.dark,
      margin: '0'
    },
    'contact.info.header': {
      fontWeight: 600,
      size: theme => theme.font.baseSize * 0.9,
      lineHeight: 1.4,
      color: theme => theme.palette.neutral.dark,
      margin: '0'
    },
    'contact.info.description': {
      fontWeight: 400,
      size: theme => theme.font.baseSize * 0.8,
      lineHeight: 1.4,
      color: theme => theme.palette.neutral.dark,
      margin: '0'
    }
  }
}
