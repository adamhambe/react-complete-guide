import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'asfds', name: 'Adam', age: 30},
      {id: 'dsfgsd', name: 'Nicklas', age: 29},
      {id: 'hgffd', name: 'Viktor', age: 29},
    ],
    showPersons: false,
    showCockpit: true

  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidUpdate() {
    console.log('[App] componentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }


  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if ( this.state.showPersons ) {
      persons = 
            <Persons 
              persons={this.state.persons}
              changed={this.nameChangedHandler}
              clicked={this.deletePersonHandler}
            />
    }

    return (
      <div className={classes.App}>
        <button onClick={() => 
        this.setState({showCockpit: false})}>Remove Cockpit</button>
        {this.state.showCockpit ? 
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          /> : null
        }
        {persons}
      </div>
    );
  }
}

export default App;