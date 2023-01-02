import React from "react";
import './style.css';

const Card = (props) =>{
    return(
            <div className="card mt-5 cardClass">
            <div className="row g-0">
            <div className="col-md-4">
                <img src={props.image} className="img-fluid rounded-top center" alt={props.title} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <ol>{props.ingredient.map(ingredients =>{
                    return(<>key={props.title}
                    <li>{ingredients.text}</li></>);
                })}</ol>
                <p className="card-text"><small className="text-muted">Calories : {props.calories}</small></p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Card