import React from 'react'
import classes from './Person.css'

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Hej jag heter {props.name} och är {props.age} år gammal</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
        
    )
}

export default person;