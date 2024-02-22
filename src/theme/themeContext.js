import { createContext } from 'react'

/*
 ** ** =========================================================================
 ** ** ** Context [themeContext]
 ** ** =========================================================================
 */
const themeContext = createContext({
  palette: {
    light: {
      primary: {
        main: '',
        light: '',
        dark: '',
        alpha: '',
      },
      background: {
        primary: '',
        secondary: '',
      },
    },
    dark: {},
    accent: {
      error: {
        main: '',
        light: '',
        dark: '',
        alpha: '',
      },
      success: {
        main: '',
        light: '',
        dark: '',
        alpha: '',
      },
      info: {
        main: '',
        light: '',
        dark: '',
        alpha: '',
      },
      warn: {
        main: '',
        light: '',
        dark: '',
        alpha: '',
      },
    },
    common: {
      gray: {
        100: '',
        200: '',
        300: '',
        400: '',
        500: '',
        600: '',
        700: '',
        800: '',
        900: '',
      },
      black: '',
      white: '',
    },
  },
})

export default themeContext
