import { useEffect } from 'react'

import styled from 'styled-components'
import feather from 'feather-icons'

//Hooks
import useTheme from '../../hooks/useTheme'

/*
 ** **
 ** ** ** Styled Components
 ** **
 */
//Button
const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  padding: ${({ $size }) => $size.padding};
  border-radius: ${({ $corners }) =>
    $corners === 'rounded' ? '100%' : $corners === 'none' ? 'none' : '4px'};
  border: ${({ $palette, $variant }) =>
    $variant === 'outline' ? `1px solid ${$palette.main}` : 'none'};
  background: ${({ $palette, $variant }) =>
    $variant === 'contain' ? $palette.main : 'transparent'};
  color: ${({ $variant, $palette }) =>
    $variant === 'contain' ? 'white' : $palette.main};
  font-size: ${({ $size }) => $size.text};
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $variant, $palette }) =>
      $variant === 'text'
        ? $palette.alpha
        : $variant === 'contain'
        ? $palette.dark
        : $palette.main};
    color: ${({ $variant }) => $variant === 'outline' && 'white'};
  }
`

//Icon
const Icon = styled.div`
  color: inherit;
`

/*
 ** ** =========================================================================
 ** ** ** Component [Button]
 ** ** =========================================================================
 */
const Button = ({
  variant = 'contain',
  size = 'sm',
  color = 'primary',
  fullWidth = false,
  corners = 'default',
  iconStart,
  iconEnd,
  children,
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
    sm: {
      padding: '4px 10px',
      text: '0.85rem',
      icon: '18px',
    },
    md: {
      padding: '8px 16px',
      text: '0.92rem',
      icon: '20px',
    },
    lg: {
      padding: '12px 22px',
      text: '0.96rem',
      icon: '22px',
    },
  }
  const selectedPalette = colorPalettes[color]
  const selectedSize = sizes[size]

  /*
   ** **
   ** ** ** Effects
   ** **
   */
  //Init feather
  useEffect(() => {
    feather.replace({ width: selectedSize.icon, height: selectedSize.icon })
  }, [selectedSize])

  return (
    <ButtonStyled
      $corners={corners}
      $fullWidth={fullWidth}
      $variant={variant}
      $palette={selectedPalette}
      $size={selectedSize}
    >
      {iconStart && <Icon date-size="10px" data-feather={iconStart}></Icon>}
      {children}
      {iconEnd && <Icon date-size="10px" data-feather={iconEnd}></Icon>}
    </ButtonStyled>
  )
}

export default Button
