import React from "react";

export default function Pizza(props){
    const {details} = props


    return (
        <div>
            <h2>{details.name}</h2>
            <p>{details.style}</p>
            <p>{details.sauce}</p>
            <p>{details.instruction}</p>
            <p>{details.quantity}</p> 
         {
                !!details.toppings && !!details.toppings.length &&
                <div className="pizza-toppings-list">
                    <h4>Toppings:</h4>
                    <ul>
                        {details.toppings.map( ( topping, idx ) => <li key={ idx }>{ topping }</li>)}
                    </ul>
                </div>
        }
       </div>
    )


}