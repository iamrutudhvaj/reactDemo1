import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { id: "a1", name: "Rutudhvaj", age: 10 },
      { id: "a2", name: "Dhaval", age: 20 },
      { id: "a3", name: "Girish", age: 20 },
    ],
    otherState: "Some Other Value",
    showPerson: false,
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is really working good!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// class App extends Component {
//   state = {
//     persons: [
//       { id: "asfa1", name: "Max", age: 28 },
//       { id: "vasdf1", name: "Manu", age: 29 },
//       { id: "asdf11", name: "Stephanie", age: 26 },
//     ],
//     otherState: "some other value",
//     showPersons: false,
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex((p) => {
//       return p.id === id;
//     });

//     const person = {
//       ...this.state.persons[personIndex],
//     };

//     // const person = Object.assign({}, this.state.persons[personIndex]);

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({ persons: persons });
//   };

//   deletePersonHandler = (personIndex) => {
//     // const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({ persons: persons });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     const style = {
//       backgroundColor: "white",
//       font: "inherit",
//       border: "1px solid blue",
//       padding: "8px",
//       cursor: "pointer",
//     };

//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 click={() => this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 changed={(event) => this.nameChangedHandler(event, person.id)}
//               />
//             );
//           })}
//         </div>
//       );
//     }

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button style={style} onClick={this.togglePersonsHandler}>
//           Toggle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }

// export default App;
