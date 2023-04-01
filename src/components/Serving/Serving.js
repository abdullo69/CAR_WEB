import React from 'react'
import Come from '../Come/Come'
import "./Serving.scss"
function Serving() {
    return (
        <div>
            <div className="serving">
                <div className="serving_text">
                    <h3>Serving the Midlands for electrical wiring harnesses</h3>
                    <p>Based in Nuneaton, we are happy to travel to anywhere in the Midlands to support your <span style={{ color: "red" }}>wiring harness requirements</span>. As the name of our business suggests, not only are we wiring harness manufacturers, we can also design electrical prototypes, and then take them to the production stage if you require this.</p>
                    <p>We can also source components for your designs, or if you have an electrical harness that requires repair, extension, or renovation.</p>

                    <div className='ser_btn'> <button>CHECK OUT OUR PREVIOUS WORK</button></div>
                </div>
            </div>
            <Come />
        </div>
    )
}

export default Serving