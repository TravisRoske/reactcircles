import './App.css';
import {useEffect, useState} from 'react'



function Circle({positionX, positionY}) {

    const [size, setSize] = useState(30)

    return (
        <img src="favicon.ico" alt="c"  style={{
            "width" : `${size}px`,
            "height" : `${size}px`,
            "position":"absolute", 
            "marginTop":`${positionY - size / 2}px`,
            "marginLeft":`${positionX - size / 2}px` 
        }} />
    );
}

export default Circle;