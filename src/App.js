import React, { useEffect, useState } from 'react'

import './App.css';
import Recipe from './Components/Recipe';



const App = () => {
  const API_ID = "bee20aa9";
  const API_KEYS =
    "4d3627bbc90e6c77692230cb34b92d4d";
  

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState('');
 const [query, setQuery] = useState('chicken');

  const getrecipe = async () => {
    const response = await fetch(API_search);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  useEffect(() => {
    getrecipe();

  }, [query]);

  const updatesearch=(event)=>
  {
    setSearch(event.target.value)

  }
  const getsearch =(event)=>{
    event.preventDefault();
    setQuery(search)
  }
  const API_search = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEYS}`;

  return (
    <>
      <div className="App">
        <form className="search-form"
        onSubmit={getsearch}>
          <input className="search-bar" value={search}
            onChange={updatesearch}
          />
          <button
            className="search-button"
            type="submit">

            search
      </button>
        </form>
        <div className="recipesclass">
        {recipes.map((recipe)=>
          <Recipe image= {recipe.recipe.image}
            title = {recipe.recipe.label}
            calories = {recipe.recipe.calories}
            key={recipe.recipe.label}
            Ingredients={recipe.recipe.ingredientLines}
          />
        )}
        </div>

      </div>
    </>
  );
}

export default App;