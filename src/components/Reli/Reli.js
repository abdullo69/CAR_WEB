import React from 'react'
import "./Reli.scss"
import img from "../../Img/img.png"
import Open from '../Open/Open'
function Reli() {
    return (
        <div>
            <div className="reli">
                <div className="reli_box"></div>
                <h3>Reliability in all environments</h3>
                <p>Our electrical harnesses are tested before use for their consistency, accuracy and strength under strain. By using durable cables and casings, and waterproof, heat-resistant sleeves, we can protect your electrical system from the strains of its environment, such as a hot, vibrating engine, or the damp of the weathe</p>
                <img src={img} alt="" />
            </div>
            <Open />
        </div>
    )
}

export default Reli