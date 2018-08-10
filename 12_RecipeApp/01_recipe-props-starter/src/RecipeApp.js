import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
          title="Spaghetti" 
          ingredients={['flour', 'watter']}
          instructions="Mix ingredients"
          img="ola-mishchenko-600004-unsplash.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
