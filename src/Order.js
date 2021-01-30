import React from "react";
import Pizza from "./Pizza"
import photo from "./photos/photo.jpg"

export default function Order({details}) {
  

  


  return (
    
    
    <div className="ordered">
      <div className="imgdiv">
       <img src={photo}/>
        <h1>CONGRATS</h1>
      </div>
      
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
