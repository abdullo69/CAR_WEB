import React from 'react'
import Exp from '../Exp/Exp'
import "./Welcome.scss"
function Welcome() {
    return (
        <div>
            <div className='wel'>
                <div className="wel_box"></div>
                <h1>Welcome to Prototype Automotive <br /> Services Ltd</h1>
                <p>Run by myself Craig Harrington, and my partner, Isabel Fernandez Diaz. We are both specialist manufacturers of electrical wiring harnesses for vehicles. As experts in vehicle electrical systems, we can design and repair electrical systems for virtually any vehicle. Our most frequent clients are owners of classic cars and customised kit cars, but we also cater to racing enthusiasts, motorbike owners, and mechanics looking to install a reliable electrical system from specialist wiring harness manufacturers.</p>
                <div className="wel_btn">
                    <button>ABOUT US</button>
                    <button>CUSTOM CABLE SERVICES</button>
                </div>
            </div>
            <Exp />
        </div>
    )
}

export default Welcome