import React from 'react'
import style from '../CSS/recipe.module.css'
 const Recipe=(props)=> {
    return (
        <div className={style.recipe}>
            <h1 >
                {props.title}
            </h1>
            <p>
                Calories:- {props.calories}
            </p>
            
            <img src={props.image} alt="Image here" 
                className={style.imagecss}
            />
            
            <ol>
            {
                props.Ingredients.map(ingre=>(
                    <li key={ingre.text}>
                        {ingre}
                    </li>
                ))
            }
            </ol>

        </div>
    )
}
export default Recipe;
