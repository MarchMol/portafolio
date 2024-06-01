import React from "react";
import './Projects.css'
import im1 from '@assets/proj/beatbuzz.png'
import im2 from '@assets/proj/calc.png'
import im3 from '@assets/proj/shyguy.png'
import im4 from '@assets/proj/therapist.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Projects = () =>{
    const settings = {
        dots: true,
        infinite: true, 
        speed: 500, 
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return(
        <div className="projects">
             <h1>My projects</h1>
             <div className="sliderContainer">
             <Slider {...settings}>
                {projectCards.map((c, key)=>(
                    <div key={key} className="projCard">
                        <h2>{c.name}</h2>
                        <a href={c.link}>
                        <img src={c.img}/>
                        </a>
                        <p>{c.description}</p>
                    </div>
                ))}
                </Slider>
             </div>

            </div>
    )
}

const projectCards = [
    {
        name: 'Beat Buzz',
        img: im1,
        link: 'https://github.com/MarchMol/web_blog',
        description: 
        'Beat Buzz is a personal blog where I talk about some of my favorite songs. '
        + 'The blog was developed using React and it makes use of a RESTful api developed using Express '
        + 'and Node js which handles all requests and talks directly to a database developed using Postgresql.'
    },
    {
        name: 'Modern Calculator',
        img: im2,
        link: 'https://github.com/MarchMol/lab7_web_calculadora',
        description:'Simple calculator developed using React that implements the use of tests to check functionality and a variety of use cases'
    },
    {
        name: 'ShyGuy',
        img: im3,
        link: 'https://github.com/MarchMol/lab4_web',
        description: 'This ShyGuy is a piece made using only css to build its body and animation.'
    },
    {
        name: 'TherapistTracker',
        img: im4,
        link: 'https://github.com/TherapistTrack/therapistTrackApp',
        description: 'Therapist Tracker is a web aplication (currently in development) that makes '
        +'use of Vue and MongoDB, with the purpose of being a tool for therapists medical proffesionals to manage their work'
    },
]
export default Projects