import styled from 'styled-components'

//Hook
import useTheme from '../../hooks/useTheme'

/*
 ** **
 ** ** ** Styled Components
 ** **
 */
const IconButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  padding: 8px;
  background: transparent;
  color: ${({ $palette }) => $palette.main};
  border: none;
  border-radius: ${({ $size }) => $size};
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    background-color: ${({ $palette }) => $palette.alpha};
  }
`

/*
 ** ** =========================================================================
 ** ** ** Component [IconButton]
 ** ** =========================================================================
 */
const IconButton = ({
  color = 'primary',
  size = 'sm',
  icon = 'plus',
  onClick,
}) => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const { theme } = useTheme()
  const colorPalettes = {
    primary: theme.palette.primary,
    error: theme.palette.accent.error,
    success: theme.palette.accent.success,
    info: theme.palette.accent.info,
    warn: theme.palette.accent.warn,
  }
  const sizes = {
    sm: '32px',
    md: '48px',
    lg: '56px',
  }
  const selectedPalette = colorPalettes[color]
  const selectedSize = sizes[size]

  return (
    <IconButtonStyled
      $palette={selectedPalette}
      $size={selectedSize}
      onClick={onClick}
    >
      {icon}
    </IconButtonStyled>
  )
}

export default IconButton
