import React, { useEffect, useState } from "react"
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import Contact from "./pages/contact/Contact"
import Tech from "./pages/tech/Tech"
import useRouter from "./hooks/useRouter"
import Cube from "./components/cube/Cube"
import Button from "./components/button/Button"
import MockFace from "./components/mockface/MockFace"

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
    const [ signal, setSignal] = useState(0)
    const {page} = useRouter()
    let CurrentPage = () => <h1>404</h1>

    if (routes[page].requireAuth && !checkLogin()) {
      return <h1>Acceso no Autorizado</h1>
    }
  
    CurrentPage = routes[page].component

    useEffect(()=>{
        console.log(signal)
    },[signal])

    const handleClick = () =>{
        setSignal((signal+1)%5)
    }

    return(
        <div className="main">
            <Button text={signal===0 ? 'Start' : 'Next'} onClick={handleClick}/>
            <Cube signal={signal}/>
            <MockFace RenderPage={CurrentPage} signal={signal} />
        </div>
    )
}

export default Router