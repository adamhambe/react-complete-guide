import React, {useEffect} from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {


    // Works as componentDidMount and componentDidUpdate in one as default (without array as second argument)
    // If no arguments are passed in array it works as componentDidMount
    // Pass arguments (like props.persons) to have useEffect focus on those variables changing
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud')
        }, 1000)
        // Return statement runs BEFORE the main useEffect function runs
        // but AFTER the (first) render cycle
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, [])

    // useEffetc (can have several)

    // console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    // is rendered before 
    // console.log('[Cockpit.js] 2nd useEffect')
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })

    const assignedClasses = []
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold) //classes = ['red', 'bold']
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>Toggle persons
            </button>
        </div>
    )
}

// Wrap components in React.memo() optimizes performance by taking a snapshot
// If said snapshot shows a change then it will re-render but if it 
// doesn't it will skip this unnecessary step
export default React.memo(cockpit)