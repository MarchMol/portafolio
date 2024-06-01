import React, { useEffect, useState } from 'react'
import './Cube.css'

const signalDecoder = {
    0: 'idle',
    1: 'start',
    2: 'tech',
    3: 'proj',
    4: 'cont',
}

import PropTypes from 'prop-types'
import useRouter from '../../hooks/useRouter'
const Cube = ({signal }) => {
    const [localSignal, setLocalSignal] = useState(0)
    const { setLoading } = useRouter()
    useEffect(()=>{
        const waitForAnim = async ()=> {
            if(!['start'].includes(signalDecoder[signal])){
                setTimeout(() => {
                    setLocalSignal(signal)
                }, 1000)
            }else{
                setLocalSignal(signal)
            }
        }
        waitForAnim()
    },[signal])
    return (
        <>
        <div class="cube" id={signalDecoder[localSignal]}>
            <div class="face front">
            </div>
            <div class="face back">
            </div>
            <div class="face left">
            </div>
            <div class="face right">
            </div>
            <div class="face top">
            </div>
        </div>
        
        <div class="face bottom"></div>
        </>
    )
}

Cube.propTypes = {
    signal: PropTypes.number
}

export default Cube