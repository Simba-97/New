import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcons, NavItem, NavLinks, NavMenu} from './NavbarElems'

const Navbar = () => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/'>Hritik Kumar Singh</NavLogo>
                   <MobileIcons>
                       <FaBars />
                   </MobileIcons>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to= 'about'>About Me</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to= 'projects'>Projects</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to= 'contact'>Contact</NavLinks>
                       </NavItem>
                   </NavMenu>
               </NavbarContainer>

           </Nav>
        </>
    )
}

export default Navbar
