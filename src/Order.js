import React from "react";
import Pizza from "./Pizza"

export default function Order({details}) {
  if(!details){
    return <h3>Waiting on Orders</h3>
  }


  return (
    
    
    <div className="ordered">

       <img src=""/>
        <h1>CONGRATS</h1>

      
      {
        details.map( pizza => {
          return (
                  <Pizza details={ pizza }/>
              )
          })
      }
      

    </div>
    
  )


}
