import React from "react";
import Pizza from "./Pizza"

export default function Order({details}) {
  if(!details){
    return <h3>Waiting on Orders</h3>
  }


  return (
    
    
    <div className="ordered">
      

      
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
