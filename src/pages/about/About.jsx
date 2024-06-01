import React from "react";
import './About.css'
import me from '@assets/me.jpeg'
const About = () =>{
    return(
        <div className="about">

<h1>About me</h1>
<div className="container">
<div className="text">
        <p>Hello there, my name is José Marchena and welcome to my portfolio!</p>
            <p>To start im gonna talk a little bit about myself.</p>
            <p>Im a 21 year-old software developer, 
                currently halflway through my Computer 
                Science Bachelor's degree at Universidad del Valle de Guatemala (UVG)</p>
                <p>I'm a people pleaser and an animal lover who loves to make fun 
                    and interesting stuff. I am very creative and I love
                    to work on personal projects about music, coding or animation.</p>
                    <p>Sometimes I tend to spend too much time perfecting my work
                        which, even if it's time consuming, it helps me develop quality products.
                    </p>
                    
        </div>
        <div >
            <img src={me} alt="" />
        </div>
        </div>
</div>

    )
}

export default About