import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxiliary'
import AuthContext from '../../../context/auth-context'


class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext

    componentDidMount() {
        this.inputElementRef.current.focus()
        console.log(this.context.authenticated)
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            // Can also use <Fragment></Fragment> for the same effect as <Aux></Aux>
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login!</p>}
                <p onClick={this.props.click}>Hej jag heter {this.props.name} och är {this.props.age} år gammal</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

}

export default withClass(Person, classes.Person);