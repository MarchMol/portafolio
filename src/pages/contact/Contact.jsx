import React from "react";
import './Contact.css'
import im1 from '@assets/cont/github.png'
import im2 from '@assets/cont/linked.png'
import im3 from '@assets/cont/mail.png'

const Contact = () => {
    return (
        <div className="contact">
            <h1>Find me in:</h1>
            <div className="contactLinks">
               <a href="https://github.com/MarchMol">
               <img src={im1} alt="" />
               </a>
               <a href="https://www.linkedin.com/in/marchmol/">
               <img src={im2} alt="" />
               </a>
            </div>
        </div>
    )
}

export default Contact