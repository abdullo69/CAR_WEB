import React from 'react'
import "./Navbar.scss"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react'
import Main from '../Main/Main'
function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }


    return (
        <div>
            <div className='navbar'>
                <div className={isMobile ? "nav_text" : 'none'} onClick={() => setIsMobile(true)}>
                    <ul>
                        <a onc href="#"><li>HOME</li></a>
                        <a href="#"><li>ABOUT US</li></a>
                        <a href="#"><li>GALLERY</li></a>
                        <a href="#"><li>CUSTOM CABLE SERVICES</li></a>
                        <a href="#"><li>CONTACT US</li></a>
                    </ul>
                </div>
                <div className='nav_bars' onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (<AiOutlineClose className='icon' />) : <FaBars onClick={toggleModal} className='icon' />}
                </div>
            </div>
            <Main />
        </div>
    )
}

export default Navbar