import { LogoIcon } from 'assets'
import NavItems from 'components/NavItems/NavItems'
import React from 'react'
import { StyledHeader } from './header-styles'
import { useScreenSize } from 'hooks/useScreenSize'

const Header = () => {
    const { isDesktopSize } = useScreenSize()
  return (
    <StyledHeader>
        <LogoIcon />
        <NavItems />
    </StyledHeader>
  )
}

export default Header