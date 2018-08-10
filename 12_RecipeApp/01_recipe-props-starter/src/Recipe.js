import React, {Component} from 'react'
import './Recipe.css';

class Recipe extends Component {
    render() {
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))
        return(
            <div className="recipe-card">
                <div ><img className="recipe-card-img" src={img} alt={title} /></div>
                <div className="recipe-card-content">
                    <h3 className="recipe-card-title">{title}</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                </div>           
            </div>
        );
    }
}

export default Recipe;