import React from "react";

export default function Pizza(props){
    const {details} = props

    if(!details){
        return <h3>Waiting on Orders</h3>
      }
    return (
        <div>
            <h2><b>Name:</b>{details.name}</h2>
            <p><b>Style:</b>{details.style}</p>
            <p><b>Sauce:</b>{details.sauce}</p>
            <p><b>Special Instructions:</b>{details.instruction}</p>
            <p><b>Quantity:</b>{details.quantity}</p> 
         {
                !!details.toppings && !!details.toppings.length &&
                <div className="pizza-toppings-list">
                    <h6>Toppings:</h6>
                    <ul>
                        {details.toppings.map( ( topping, idx ) => <li key={ idx }>{ topping }</li>)}
                    </ul>
                </div>
        }
       </div>
    )


}