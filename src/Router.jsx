import React, { useState } from "react"
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import Contact from "./pages/contact/Contact"
import Tech from "./components/tech/Tech"
import useRouter from "./hooks/useRouter"
import Cube from "./components/cube/Cube"
import Button from "./components/button/Button"
import MockFace from "./components/cube/MockFace"


const routes = {
    '/home': {
      component: About
    },
    '/projects': {
        component: Projects
      },
    '/about_me': {
      component: About
    },
    '/contact': {
      component: Contact
    },
    '/tech': {
      component: Tech
    },
}

const Router = () => {
    const [ signal, setSignal] = useState(false)
    const {page} = useRouter()
    let CurrentPage = () => <h1>404</h1>

    if (routes[page].requireAuth && !checkLogin()) {
      return <h1>Acceso no Autorizado</h1>
    }
  
    CurrentPage = routes[page].component

    const handleClick = () =>{
        setSignal(!signal)
    }

    return(
        <>
            <h1>José Marchena</h1>
            <h3>Personal Portfolio</h3>
            <Cube signal={signal}/>
            <Button text='Start' onClick={handleClick}/>
            <MockFace PageRender={About} signal={signal} />
        </>
    )
}

export default Router