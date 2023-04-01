import React from 'react'
import "./Main.scss"
import img from "../../Img/img.png"
import Welcome from '../Welcome/Welcome'
function Main() {
    return (
        <div>
            <div className='main'>
                <div className="main_text">
                    <img src={img} alt="" />
                    <h1>WIRING HARNESS <br /> MANUFACTURERS</h1>

                    <div className='main_btn'><button>CONTACT US TODAY</button></div>
                </div>
            </div>
            <Welcome />
        </div>
    )
}

export default Main