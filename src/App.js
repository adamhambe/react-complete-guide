import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    persons: [
      {id: 'asfds', name: 'Adam', age: 30},
      {id: 'dsfgsd', name: 'Nicklas', age: 29},
      {id: 'hgffd', name: 'Viktor', age: 29},
    ],
    showPersons: false

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

    this.setState({
      persons: [
        {name: 'Adam', age: 30},
        {name: event.target.value, age: 29},
        {name: 'Viktor', age: 29},
      ]
    })
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}
        </div>
      );
    }

    return (
      <div className="App">
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;




/* HOOKS */

/* import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Adam', age: 30},
      {name: 'Nicklas', age: 29},
      {name: 'Viktor', age: 29},
    ],
    otherState: 'Some other value'
  })

  const switchNameHandler = () => {
    console.log('Was clicked!')
    setPersonsState({
      persons: [
        {name: 'Harambe', age: 30},
        {name: 'Nocklas', age: 29},
        {name: 'Lars', age: 29},
      ]
    })
  }

    return (
      <div className="App">
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>

      </div>
    );
}

export default app; */