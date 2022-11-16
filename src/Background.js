import './App.css';
import {useEffect, useState} from 'react'
import Circle from './Circle';

function Background() {

    const [ mainStack, setMainStack ] = useState([])
    const [ undoStack, setUndoStack ] = useState([])

    function createCircle(event) {
        let circle = <Circle 
            key={mainStack.length + 1} 
            positionX={event.clientX} 
            positionY={event.clientY} />

        setMainStack([...mainStack, circle])
        setUndoStack([])
    }    

    function undo() {
        let main = mainStack;
        if(main.length > 0){
            let undid = mainStack.pop();

            setMainStack(main)
            setUndoStack([...undoStack, undid])
        }
    }

    function redo() {
        let undo = undoStack;
        if(undo.length > 0){
            let redid = undoStack.pop();

            setMainStack([...mainStack, redid])
            setUndoStack(undo)
        }
    }

    return (
        <>
            <div className='container' onClick={createCircle}>
                {mainStack}
            </div>
            <button className='button' onClick={undo}>Undo</button>
            <button className='button' onClick={redo}>Redo</button>
        </>
    );
}

export default Background;