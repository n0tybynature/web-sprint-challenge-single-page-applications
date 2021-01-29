import React from "react";

export default function Order({details}) {
  if(!details){
    return <h3>Waiting on Orders</h3>
  }


  return (
    <div className="ordered">
      <h2>{details.name}</h2>
      <p>{details.style}</p>
      <p>{details.style}</p>
      <p>{details.sauce}</p>
      <p>{details.topping}</p>
      <p>{details.instruction}</p>
      <p>{details.quantity}</p>
    </div>
  )


}
