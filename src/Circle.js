import './App.css';
import {useEffect, useState} from 'react'



function Circle({positionX, positionY}) {

    const [size, setSize] = useState(Math.random() * 100)

    return (
        <img src="circle.png" alt="c"  style={{
            "width" : `${size}px`,
            "height" : `${size}px`,
            "position":"absolute", 
            "marginTop":`${positionY - size / 2}px`,
            "marginLeft":`${positionX - size / 2}px` 
        }} />
    );
}

export default Circle;