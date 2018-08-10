import React, {Component} from 'react';

class HobbyList extends React.Component {
    render(){
      const liStyle = {fontSize: '2em'};
      const hobbies= ["Sleeping", "Eating", "Cuddling"]
      return (<ul>
          {hobbies.map((hobbie, index) => {return <li key={index} style={liStyle}>{hobbie}</li> })}
        </ul>);

    }
}

export default HobbyList;