import React from 'react'
import {SideBarContainer, Icon, CloseIcon} from './SideBarElems'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            
        </SideBarContainer>
    )
}

export default SideBar
