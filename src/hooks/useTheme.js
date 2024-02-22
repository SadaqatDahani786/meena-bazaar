import { useState, useEffect, useContext } from 'react'

//Hooks
import useLocalStorage from './useLocalStorage'
import themeContext from '../theme/themeContext'

/*
 ** ** =========================================================================
 ** ** ** Hook [useTheme]
 ** ** =========================================================================
 */
const useTheme = () => {
  /**
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const theme = useContext(themeContext)
  const [selectedTheme, setSelectedTheme] = useState({
    palette: {
      ...theme.palette.light,
      accent: theme.palette.accent,
      common: theme.palette.common,
    },
  })
  const { storedItems, addItem } = useLocalStorage()

  /**
   ** **
   ** ** ** Side Effects
   ** **
   */
  /*
   ** **
   ** ** ** Toggle theme when darkmode changes
   ** **
   */
  useEffect(() => {
    //1) Get dark mode from storage
    const darkMode = storedItems['dark-mode']

    //2) Set the theme based on saved dark mode value
    setSelectedTheme(
      darkMode === 'ON'
        ? {
            palette: {
              ...theme.palette.dark,
              accent: theme.palette.accent,
              common: theme.palette.common,
            },
          }
        : {
            palette: {
              ...theme.palette.light,
              accent: theme.palette.accent,
              common: theme.palette.common,
            },
          }
    )
  }, [theme, storedItems])

  /**
   ** **
   ** ** ** Methods
   ** **
   */
  //Togle the darkMode 'ON' or 'OFF'
  const toggleDarkMode = () => {
    const darkMode = storedItems['dark-mode'] === 'ON' ? 'OFF' : 'ON'
    addItem('dark-mode', darkMode)
  }

  return {
    theme: selectedTheme,
    darkMode: storedItems['dark-mode'] || 'OFF',
    toggleDarkMode,
  }
}

export default useTheme
