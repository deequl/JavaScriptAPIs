import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, { 
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    setTimeout(() => {
      //note: We have not to modify this.state, use pure functions to avoid
      //only modify this.state with -> this.setState();
      const randInstructor = Math.floor(Math.random() * this.state.instructors.length);
      const randIndexHobbie = Math.floor(Math.random() * this.state.instructors[randInstructor].length);

      // const instructors = this.state.instructors.slice();
      // instructors[randInstructor] = Object.assign({}, instructors[randInstructor]);
      // instructors[randInstructor].hobbies = instructors[randInstructor].hobbies.slice();
      // instructors[randInstructor].hobbies.splice(randIndexHobbie, 1);

      // const instructors = this.state.instructors.map((instructor, index) => {
      //   if (index === randInstructor) {
      //     //const hobbies = instructor.hobbies.slice();
      //     const hobbies = [...instructor.hobbies];
      //     hobbies.splice(randIndexHobbie, 1);
      //     return {
      //       ...instructor,
      //       hobbies
      //     };
      //   }
      //   return instructor;
      // });

      const instructors = this.state.instructors.map((instructor, index) => (
        index === randInstructor ? {
          ...instructor,
          //hobbies: [...instructor.hobbies.slice(0, randIndexHobbie).concat(instructor.hobbies.slice(randIndexHobbie+1, instructor.hobbies.length))]
          hobbies: [...instructor.hobbies.slice(randIndexHobbie, 1)]
        } : instructor
      ));

      this.setState({instructors});
    }, 3000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
