import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    persons: [
      {name: 'Adam', age: 30},
      {name: 'Nicklas', age: 29},
      {name: 'Viktor', age: 29},
    ]

  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: 'Nocklas', age: 29},
        {name: 'Lars', age: 29},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Adam', age: 30},
        {name: event.target.value, age: 29},
        {name: 'Viktor', age: 29},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, 'Harambe')}>Switch name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'ADAM')}
        changed={this.nameChangedHandler} >I like cooking</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
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