import ThemeContext from './themeContext'
import AppTheme from './theme'

/*
 ** ** =========================================================================
 ** ** ** Component [ThemeProvider]
 ** ** =========================================================================
 */
const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={AppTheme}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
