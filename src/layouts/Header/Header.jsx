import { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faShoppingCart,
  faSearch,
  faBars,
  faTimes,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

//Hooks
import useTheme from '../../hooks/useTheme'

//Components
import Button from '../../components/Button'
import IconButton from '../../components/IconButton/IconButton'
import TextInput from '../../components/TextInput/TextInput'

//Images
import PatternImg from '../../assets/goldish-pattern.png'
import LogoImg from '../../assets/meena-bazaar-logo.png'

/*
 ** **
 ** ** ** Styled Components
 ** **
 */
//Header
const HeaderStyled = styled.header`
  width: 100%;
  background: ${({ $bgColor }) => $bgColor};
  border-bottom: 1px solid ${({ $borderColor }) => $borderColor};
  height: 12rem;
  position: relative;

  @media (max-width: 900px) {
    height: 6rem;
  }
`

//Box
const Box = styled.div`
  width: 100%;
  height: 20%;
  background: ${({ $bgColor }) => $bgColor};
  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    height: 35%;
  }
`

//Box Pattern
const BoxPattern = styled.div`
  width: 15rem;
  height: 100%;
  background-image: url(${({ $bg }) => $bg});
  background-size: 100% cover;
  background-position: center;
`

//Nav
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 80%;

  @media (max-width: 900px) {
    height: 65%;
    padding: 0 8px;
  }
`

//Logo Box
const LogoBox = styled.div`
  flex: 0 0 10%;

  @media (max-width: 900px) {
    display: none;
  }
`

//Logo
const Logo = styled.img``

//Nav Items
const NavItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

//Nav Actions
const NavActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: auto;

  @media (max-width: 900px) {
    margin-top: 0;
  }
`

//Search
const Search = styled.div`
  margin: 0 auto;

  @media (max-width: 900px) {
    display: none;
  }
`

//Button Group
const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`

//Navigation Links
const NavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  height: 4rem;

  @media (max-width: 900px) {
    display: none;
  }
`

//Navigation List
const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  height: 100%;
`

//Navigation List Item
const NavListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:hover > hr {
    opacity: 1;
  }

  &:hover > .subNav {
    display: block;
  }
`

//Horizontal Rule
const Hr = styled.hr`
  width: 5rem;
  height: 1px;
  background: red;
  border: none;
  opacity: 0;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
`

//Anchor Link
const ALink = styled.a`
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  font-size: 1.3rem;

  @media (max-width: 1600px) {
    font-size: 1rem;
    padding: 0 16px;
  }

  @media (max-width: 1200px) {
    padding: 0 8px;
  }
`

//Sub Navigation
const SubNav = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(calc(100% + 1px));
  width: 100%;
  height: 4rem;
  background-color: ${({ $bg }) => $bg};
  display: none;
  justify-content: center;
  align-items: center;
`

//Menu Button
const MenuButton = styled.div`
  display: none;
  margin-right: auto;

  @media (max-width: 900px) {
    display: block;
  }
`

//Mobile Navigation Menu
const MobNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(calc(100% - (6rem * 65) / 100));
  padding: 8px;
  background: ${({ $bg }) => $bg};
  box-shadow: var(--shadow-elevation-low);
  font-size: 1rem;
`

//Title Bar
const TitleBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`

//Mobile Navigation List
const MobNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`

//Mobile Navigation List Item
const MobNavListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  font-size: 0.92em;
`

//Navigation List Item Header
const NavListItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`

/*
 ** ** =========================================================================
 ** ** ** Component [Header]
 ** ** =========================================================================
 */
const Header = () => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const [showMobMenu, setShowMobMenu] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState(-1)
  const { theme } = useTheme()
  const links = [
    { name: 'Bridal Sets', sublinks: ['Necklace Sets'] },
    { name: 'Necklace Sets', sublinks: ['Becklace Sets'] },
    { name: 'Americal Diamond', sublinks: ['Necklace Sets'] },
    { name: 'Necklace Sets', sublinks: ['Necklace Sets'] },
    { name: 'Earrings', sublinks: ['Necklace Sets'] },
    { name: 'Bangles', sublinks: ['Necklace Sets'] },
    { name: 'Scarves/Hijab', sublinks: ['Necklace Sets'] },
  ]

  return (
    <HeaderStyled
      $borderColor={theme.palette.common.gray[400]}
      $bgColor={theme.palette.background.primary}
    >
      <Box $bgColor={theme.palette.primary.main}>
        <BoxPattern $bg={PatternImg} />
        <BoxPattern $bg={PatternImg} />
      </Box>
      <Nav>
        <LogoBox>
          <Logo src={LogoImg} />
        </LogoBox>
        <NavItems>
          <NavActions>
            <Search>
              <TextInput
                corners="full"
                size="md"
                placeholder="Search for products"
                actionIcon={<FontAwesomeIcon icon={faSearch} />}
              />
            </Search>
            <MenuButton>
              <IconButton
                onClick={() => setShowMobMenu(true)}
                size="md"
                icon={<FontAwesomeIcon size="lg" icon={faBars} />}
              />
            </MenuButton>
            <ButtonGroup>
              <IconButton
                size="md"
                color="primary"
                icon={<FontAwesomeIcon size="lg" icon={faUser} />}
              />
              <IconButton
                size="md"
                color="primary"
                icon={<FontAwesomeIcon size="lg" icon={faShoppingCart} />}
              />
            </ButtonGroup>
          </NavActions>
          <NavLinks>
            <NavList>
              {links.map((link, i) => (
                <NavListItem key={i}>
                  <ALink>{link.name}</ALink>
                  <Hr />
                  <SubNav
                    $bg={theme.palette.background.primary}
                    className="subNav"
                  >
                    <NavList>
                      {link.sublinks.map((sublink, j) => (
                        <NavListItem key={i + j}>{sublink}</NavListItem>
                      ))}
                    </NavList>
                  </SubNav>
                </NavListItem>
              ))}
            </NavList>
            <Button
              size="md"
              corners="default"
              variant="outline"
              fullWidth={false}
            >
              More Collection
            </Button>
          </NavLinks>
        </NavItems>
      </Nav>
      {showMobMenu && (
        <MobNavMenu $bg={theme.palette.background.primary}>
          <TitleBar>
            <h4>Categories</h4>
            <IconButton
              size="sm"
              icon={<FontAwesomeIcon size="1x" icon={faTimes} />}
              onClick={() => {
                setShowMobMenu(false)
                setActiveSubMenu(-1)
              }}
            />
          </TitleBar>
          <MobNavList>
            {links.map((link, i) => (
              <MobNavListItem key={i}>
                <NavListItemHeader
                  onClick={() => {
                    activeSubMenu === i
                      ? setActiveSubMenu(-1)
                      : setActiveSubMenu(i)
                  }}
                >
                  {link.name}
                  <i style={{ padding: '0 12px' }}>
                    <FontAwesomeIcon
                      size="sm"
                      icon={
                        activeSubMenu === i ? faChevronDown : faChevronRight
                      }
                    />
                  </i>
                </NavListItemHeader>
                {activeSubMenu === i && (
                  <MobNavList>
                    {link.sublinks.map((subLink, j) => (
                      <MobNavListItem key={i + j}>{subLink}</MobNavListItem>
                    ))}
                  </MobNavList>
                )}
              </MobNavListItem>
            ))}
          </MobNavList>
        </MobNavMenu>
      )}
    </HeaderStyled>
  )
}

export default Header
