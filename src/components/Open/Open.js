import React from 'react'
import "./Open.scss"
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
function Open() {
    return (
        <div>
            <div className="open">
                <div className="con_nav">
                    <p> CONTACT PROTOTYPE AUTOMOTIVE SERVICES TODAY TO GET A QUOTE FOR YOUR WIRING HARNESS: 024 7634 5798 OR 07779 003 413</p>
                </div>

                <div className="open_input">
                    <div className="o_input">
                        <label>Name <span style={{ color: "red" }}>*</span></label>
                        <input type="text" />
                        <label>Email <span style={{ color: "red" }}>*</span></label>
                        <input type="text" />
                        <label>Telephone <span style={{ color: "red" }}>*</span></label>
                        <input type="text" />
                        <label>Requirement details <span style={{ color: "red" }}>*</span></label>
                        <input style={{ height: "80px" }} type="text" />

                        <h6>Join our mailing list</h6>

                        <p>See our <span style={{ color: "#E61B23" }}>privacy policy</span>.</p>

                        <button>Submit</button>
                    </div>

                    <div className='o_text'>
                        <h3> OPENING HOURS</h3>
                        <p>MON: 8.00am - 5:00pm</p>
                        <p>TUES: 8.00am - 5.00pm</p>
                        <p>WEDS: 8.00am - 5.00pm</p>
                        <p>THURS: 8.00am - 5.00pm</p>
                        <p>FRI: 8.00am - 5.00pm</p>
                        <p>SAT: 8.00am - 1.00pm</p>
                        <p>SUNDAY: CLOSED</p>
                        <p>Call 24/7</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Copyright  2023 - Prototype Automotive Services</p>
                <div className='icons'>
                    <FaFacebookF className='icon' />
                    <BsInstagram className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Open