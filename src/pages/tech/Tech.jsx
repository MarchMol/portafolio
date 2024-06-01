import React from "react";
import './Tech.css'
import f1 from '@assets/tech/frontend/html.png'
import f2 from '@assets/tech/frontend/css.png'
import f3 from '@assets/tech/frontend/javascript.png'
import f4 from '@assets/tech/frontend/react.png'
import f5 from '@assets/tech/frontend/vue.png'
import f6 from '@assets/tech/frontend/vite.png'
import f7 from '@assets/tech/frontend/jetpack.png'
import f8 from '@assets/tech/frontend/kotlin.png'

import b1 from '@assets/tech/backend/python.png'
import b2 from '@assets/tech/backend/nodejs.png'
import b3 from '@assets/tech/backend/c_mm.png'
import b4 from '@assets/tech/backend/express.png'
import b5 from '@assets/tech/backend/java.png'

import d1 from '@assets/tech/database/mysql.png'
import d2 from '@assets/tech/database/postgres.png'
import d3 from '@assets/tech/database/firebase.webp'

const Tech = () => {
    return (
        <div className="technology">
            <h1>Technologies</h1>
            <div className="types">
                <div className="techCard">
                    {techCards[0].technologies.map((t, key) =>
                    (
                        <div key={key} className="techElement">
                            <p>{t.name}</p>
                            <img src={t.img} alt="" />
                        </div>
                    )
                    )}
                </div>
                <div className="techCard">
                {techCards[1].technologies.map((t, key) =>
                (
                    <div key={key} className="techElement">
                        <p>{t.name}</p>
                        <img src={t.img} alt="" />
                    </div>
                )
                )}
            </div>
            <div className="techCard">
                {techCards[2].technologies.map((t, key) =>
                (
                    <div key={key} className="techElement">
                        <p>{t.name}</p>
                        <img src={t.img} alt="" />
                    </div>
                )
                )}
            </div>
            </div>

        </div>
    )
}

const techCards = [
    {
        category: 'Frontend',
        technologies: [
            { name: 'HTML', img: f1 },
            { name: 'CSS', img: f2 },
            { name: 'JavaScript', img: f3 },
            { name: 'React', img: f4 },
            { name: 'Vue', img: f5 },
            { name: 'Vite', img: f6 },
            { name: 'Jetpack Compose', img: f7 },
            { name: 'Kotlin', img: f8 }
        ]
    },
    {
        category: 'Backend',
        technologies: [
            { name: 'Python', img: b1 },
            { name: 'Node.js', img: b2 },
            { name: 'C++', img: b3 },
            { name: 'Express', img: b4 },
            { name: 'Java', img: b5 }
        ]
    },
    {
        category: 'DataBase',
        technologies: [
            { name: 'MySQL', img: d1 },
            { name: 'PostgreSQL', img: d2 },
            { name: 'FireBase', img: d3 }
        ]
    }
];

export default Tech