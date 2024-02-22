import styled from 'styled-components'

//Hook
import useTheme from '../../hooks/useTheme'

/*
 ** **
 ** ** ** Styled Components
 ** **
 */
//Text Input
const TextInputStyled = styled.div`
  display: flex;
  width: ${({ $size, $fullWidth }) => ($fullWidth ? '100%' : $size.width)};
  height: ${({ $size }) => $size.height};
  overflow: hidden;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: ${({ $size, $corners, $fullWidth }) =>
    $corners === 'full'
      ? $fullWidth
        ? '100%'
        : $size.width
      : $corners === 'none'
      ? 0
      : '4px'};
`

//Text Input Element
const TextInputElement = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  border: none;
  font-size: ${({ $size }) => $size.text};
`

//Action Button
const ActionButton = styled.button`
  background: ${({ $palette }) => $palette.main};
  border: none;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ $palette }) => $palette.dark};
  }
`

/*
 ** ** =========================================================================
 ** ** ** Component [TextInput]
 ** ** =========================================================================
 */
const TextInput = ({
  color = 'primary',
  size = 'md',
  icon,
  actionIcon,
  actionOnClick,
  corners = 'default',
  fullWidth = false,
  placeholder,
  value,
  name,
  onChange,
  onBlur,
}) => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const { theme } = useTheme()
  const palette = {
    primary: theme.palette.primary,
    error: theme.palette.error,
    success: theme.palette.success,
    info: theme.palette.info,
    warn: theme.palette.warn,
  }
  const sizes = {
    sm: {
      width: '18rem',
      height: '2rem',
      text: '.96rem',
    },
    md: { width: '22rem', height: '2.8rem', text: '1.1rem' },
  }
  const selectedSize = sizes[size]
  const selectedPalette = palette[color]

  return (
    <TextInputStyled
      $borderColor={theme.palette.common.gray[300]}
      $corners={corners}
      $fullWidth={fullWidth}
      $size={selectedSize}
    >
      {icon && icon}
      <TextInputElement
        $size={selectedSize}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {actionIcon !== undefined && (
        <ActionButton $palette={selectedPalette} onClick={actionOnClick}>
          {actionIcon}
        </ActionButton>
      )}
    </TextInputStyled>
  )
}

export default TextInput
