import React, {Component} from 'react'
import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary'

class Person extends Component {

    render() {
        console.log('[Person.js] rendering...')
        return (
            // Can also use <Fragment></Fragment> for the same effect as <Aux></Aux>
            <Aux>
                <p onClick={this.props.click}>Hej jag heter {this.props.name} och är {this.props.age} år gammal</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Aux>
        )
    }
}

export default Person;