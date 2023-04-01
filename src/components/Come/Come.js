import React from 'react'
import img from "../../Img/liptop.jpg"
import "./Come.scss"
import { AiOutlineCheckSquare } from "react-icons/ai"
import Reli from '../Reli/Reli'
function Come() {
    return (
        <div>
            <div className="comes">
                <h3> Why come to Prototype Automotive Services?</h3>

                <div className="come">
                    <div className="come_img">
                        <img src={img} alt="" />
                    </div>

                    <div className="come_text">
                        <p><AiOutlineCheckSquare style={{ color: "red" }} /> Quality components and high attention to detail in manufacture</p>
                        <p><AiOutlineCheckSquare style={{ color: "red" }} /> Reasonable, no-obligation quotes for bespoke designs</p>
                        <p><AiOutlineCheckSquare style={{ color: "red" }} /> All kinds of vehicles catered to, including motor racing, prototypes and classic cars</p>
                        <p><AiOutlineCheckSquare style={{ color: "red" }} /> Highly experienced wiring harness manufacturers</p>

                        <h4>Quality is paramount at Prototype Automotive, and we are justly proud of our workmanship, and the longevity of our designs. Using high quality components and provident design practices means that the electrical system that we design should comfortably outlive the vehicle it was designed for.</h4>

                        <div className="come_button"> <button>ENQUIRE FOR A QUOTE</button></div>
                    </div>
                </div>
            </div>
            <Reli />
        </div>
    )
}

export default Come