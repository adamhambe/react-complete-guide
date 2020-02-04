import React from 'react'
import './Person.css'
import Radium from 'radium'

const person = (props) => {

    const style = {
        '@media (min-width: 450px': {
            width: '300px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Hej jag heter {props.name} och är {props.age} år gammal</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
        
    )
}

export default Radium(person);