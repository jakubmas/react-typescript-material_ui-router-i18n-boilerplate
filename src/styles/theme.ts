import { createTheme, responsiveFontSizes } from '@mui/material/styles'

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    themeName?: string // optional
  }
}

const palette = {
  primary: { main: '#35AB91', light: '#5DBCA7' },
  secondary: { main: '#77D4D9', dark: '#2699FB' },
  warning: { main: '#FFCF33' },
  error: { main: '#c93131' },
  text: { primary: '#05110E', secondary: '#7cb3c7', hint: '#FFFFFF' },
  background: { default: '#F4F4FC', paper: '#FFFFFF' },
  success: { main: '#7cb3c7' }
}

const typography = {
  fontFamily: ['Lato', 'Montserrat', 'Work Sans', 'serif'].join(','),
  allVariants: {
    // color: '#707070'
    color: '#05110E'
  },
  body2: {
    fontSize: '1.4em',
    fontWeight: 100
  }
}

export default responsiveFontSizes(createTheme({ palette, typography }))
