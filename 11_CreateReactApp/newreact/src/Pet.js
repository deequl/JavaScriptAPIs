import React, {Component} from 'react';
import HobbyList from './HobbyList';
import './Pet.css';

class Pet extends Component{
    render(){
      const liStyle = {fontSize: '1.5em'};
      return (
        //imp - dont call it class, it's className
        <div className="card">
          <h2 className="name">Moxie</h2>
          <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" alt="It's Moxie, my cat" />
          <h5 style={{fontSize: '2em'}}>Hobbies:</h5>
          <ul>
            <li style={liStyle}>Sleep</li>
            <li style={liStyle}>Eat</li>
            <li style={liStyle}>5 + 5 = {5+5}</li>
          </ul>
          <HobbyList />
        </div>
      );                             
    }
  }

export default Pet;