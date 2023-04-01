import React from 'react'
import Serving from '../Serving/Serving'
import "./Contact.scss"
function Contact() {
    return (
        <div>
            <div className='contact'>
                <div className="con_nav">
                    <p> CONTACT PROTOTYPE AUTOMOTIVE SERVICES TODAY TO GET A QUOTE FOR YOUR WIRING HARNESS: 024 7634 5798 OR 07779 003 413</p>
                </div>

                <div className="con_carts">
                    <div className="con_cart">
                        <h3>  PROTOTYPE WIRING</h3>
                        <p>We can create prototype wiring harnesses for cars, motorbikes and sport vehicles.</p>
                    </div>
                    <div className="con_cart">
                        <h3>MASS REFLASHING FOR ECU's</h3>
                        <p>We are happy to update and reflash the ECUs for vehicles of almost any make and model</p>
                    </div>
                    <div className="con_cart">
                        <h3>TEST RIGS AND TEST HARNESSES</h3>
                        <p>Electrical fault finding, and diagnostic breakout harnesses for a wide range of machinery.</p>
                    </div>
                    <div className="con_cart">
                        <h3>  ELECTRICAL DRAWINGS</h3>
                        <p>We can draw up diagrams, designs, and electric circuit maps for any kind of appliance</p>
                    </div>
                </div>
            </div>
            <Serving />
        </div>
    )
}

export default Contact