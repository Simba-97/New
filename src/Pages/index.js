import React, {useState} from 'react'
import SideBar from '../Components/Navbar/Sidebar'
import Navbar from '../Components/Navbar'
import HeroPage from '../Components/HeroPage';
import InfoSection from '../Components/Navbar/InfoSection';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <SideBar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle}/>
            <HeroPage />
            <InfoSection />
        </>
    )
}

export default Home
