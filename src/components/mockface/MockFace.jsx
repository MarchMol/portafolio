import React, { useEffect, useState } from 'react'
import './MockFace.css'
import PropTypes from 'prop-types'
import useRouter from '../../hooks/useRouter'
import About from '../../pages/about/About'

const signalDecoder = {
    0: {
        state: 'idle',
        nav: '/home'
    },
    1: {
        state: 'about',
        nav: '/about_me'
    },
    2: {
        state: 'proj',
        nav: '/projects'
    },
    3: {
        state: 'tech',
        nav: '/tech'
    },
    4: {
        state: 'cont',
        nav: '/contact'
    },

}

const MockFace = ({ RenderPage, signal }) => {
    const [show, setShow] = useState(false)
    const [expand, setExpand] = useState(false)
    const [localPage, setLocalPage] = useState('')
    const { setLoading, navigate } = useRouter()

    useEffect(() => {
        const waitForAnimation = async () => {
            signal!=0 && setLoading(true)
            navigate(signalDecoder[signal].nav)
            setShow(false)
            setExpand(false)

            setTimeout(() => {
                setLocalPage('')
            }, 200)
            if(signal!=0){
                setTimeout(() => {
                    setLocalPage(signalDecoder[signal].state)
                    setExpand(true)
                }, 2500)
                setTimeout(() => {
                    setShow(true)
                    setLoading(false)
                }, 3000)
            }
        }
        waitForAnimation()
    }, [signal])

    return (
        <div className='mockContainer'>
            <div className={`MockFace ${localPage}`} id={expand ? 'expand' : 'normal'}>
                {show && <RenderPage />}
            </div>
        </div>
    )
}

MockFace.propTypes = {
    signal: PropTypes.number,
    RenderPage: PropTypes.elementType.isRequired
}

export default MockFace