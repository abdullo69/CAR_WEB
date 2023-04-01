import React from 'react'
import rul from "../../Img/rul.jpg"
import Contact from '../Contact/Contact'
import "./Exp.scss"
function Exp() {
    return (
        <div>
            <div className='exp'>
                <div className="exp_text">
                    <h2>Experienced electrical engineers</h2>
                    <p>As wiring harness manufacturers, Prototype Automotive Services Ltd is an experienced engineering firm with 15 years’ experience providing technical solutions to the automotive industry.</p>
                    <p>Prototype can offer a wide range of bespoke wiring for all your wiring needs. </p>
                </div>

                <div className="exp_img">
                    <div className="ex_img">
                        <img src={rul} alt="" />
                    </div>
                    <div className="ex_text">
                        <p>This can include creating a brand new cable harness from the customer’s design or modifying an existing classic car harness to suit your requirements.</p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Exp