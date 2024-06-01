import {React, useState} from "react"
import PropTypes from 'prop-types'
import './Button.css'
import useRouter from "../../hooks/useRouter"

const Button = ({ text, onClick}) => {
    const [selected, setSelected] = useState(false)
    const {loading} = useRouter()

    const handleMouseDown =()=>{
        if(!loading){
            setSelected(!selected)
        }
    }

 
    return(
        <button
        onClick={onClick}
        onMouseDown={handleMouseDown}
        onMouseUp={()=>{setSelected(false)}}
        onMouseLeave={()=>{setSelected(false)}}
        id={selected ? 'selected' : ''}
        disabled={loading}
        >
            {text}
        </button>
    )
}
Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button