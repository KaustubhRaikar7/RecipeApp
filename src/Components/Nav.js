import React,{useState,useEffect} from "react";
import Card from "./Card";
import './style.css';


const Nav = ()=>{
    const APP_ID = "cf4c7b09";
    const APP_KEY = "363f3931b7374ce8ec4f6e2367cf76ab"

    const [recipes, setRecipes] = useState([]);
    const [search,setSearch] = useState("");   //this is to get the input box data
    const [query,setQuery] = useState("chicken"); //this is to fetch input value, when the string is complete.

    useEffect(() => {
        getRecipes();
    },[query]);
    
    const getRecipes = async ()=>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };
    const updateSearch = (e) =>{
        setSearch(e.target.value);
    }
    const getSearch = (e) =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return(
        <div className="container">
            <form onSubmit={getSearch}>
            <input className="inputField" type={'text'} value={search} onChange={updateSearch}/>
            <button className="btn btn-primary btnClass" type="submit">Search</button>
            </form>
            {recipes.map(recipe =>{
                return (<Card key={recipe.recipe.label} title ={recipe.recipe.label} calories = {recipe.recipe.calories} 
                image = {recipe.recipe.image} ingredient={recipe.recipe.ingredients} />)
            })}
        </div>     
    );
}

export default Nav;