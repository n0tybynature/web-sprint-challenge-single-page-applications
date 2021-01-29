import React from "react";

export default function PizzaForm(props){
  const {
    values,
    submit,
    change,
    disabled,
    errors
  } = props


  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const {name, value, type, checked} = evt.target;
    const valueToUse = type === "checkbox" ? checked : value
    change(name,valueToUse)
  }

  return (
    <form className="pf-container" onSubmit={onSubmit}>
      <div className="pfsubmit">
        <h2>Build a Pizza</h2>
        <img/>
        <div className="namediv">
          <h4>Name</h4>
          <input type="text" onChange={onChange} name="name" value={values.name}/>
        </div>

        <div className="stylediv">
          <h4>Style of Size</h4>
          <div>{errors.style}</div>
          <label> Sicilian
          <input type="radio" onChange={onChange} value="sicilian" checked={values.style === "sicilian"} name="style"/>
          </label>
          <label> Chicago
          <input type="radio" onChange={onChange} value="chicago" checked={values.style === "chicago"} name="style"/>
          </label>
          <label> New York
          <input type="radio" onChange={onChange} value="newyork" checked={values.style === "newyork"} name="style"/>
          </label>
          <label> Detriot
          <input type="radio" onChange={onChange} value="detriot" checked={values.style === "detriot"} name="style"/>
          </label>
          
        </div>



        <div className="sizediv">
          <h4>Choice of Size</h4>
          <div>{errors.size}</div>
          <label>Select Size:
            <select className="sizes" value={values.size} onChange={onChange} name="size">
              <option className="sizes" value="">Select an option</option>
              <option className="sizes" value="small">Small 8"</option>
              <option className="sizes" value="medium">Medium 12"</option>
              <option className="sizes" value="large">Large 16"</option>
              <option className="sizes" value="x-large">X-Large 20"</option>
            </select>
          </label>
        </div>

        <div className="saucediv">
          <h4>Choice of Sauce</h4>
          <div>{errors.sauce}</div>
          <label> Red Sauce
          <input type="radio" onChange={onChange}  value="redSauce" checked={values.sauce === "redSauce"} name="sauce"/>
          </label>
          <label> White Sauce
          <input type="radio" onChange={onChange}  value="whiteSauce" checked={values.sauce === "whiteSauce"} name="sauce"/>
          </label>
          <label> No Sauce
          <input type="radio" onChange={onChange}  value="noSauce" checked={values.sauce === "noSauce"} name="sauce"/>
          </label>
        </div>

        <div className="toppingdiv">
          <h4>Choice of Toppings</h4>
          <label>Pepperoni
            <input type="checkbox" onChange={onChange} name="pepperoni" checked={values.pepperoni}/>
          </label>
          <label>Xtra Cheese
            <input type="checkbox" onChange={onChange} name="extraCheese" checked={values.extraCheese}/>
          </label>
          <label>Sausage
            <input type="checkbox" onChange={onChange} name="sausage" checked={values.sausage}/>
          </label>
          <label>Mushroom
            <input type="checkbox" onChange={onChange} name="mushroom" checked={values.mushroom}/>
          </label>

        </div>

        <div className="instructdiv">
          <h4>Special Instructions</h4>
          <input type="text" onChange={onChange} name="instruction"/>
        </div>

        <div className="orderbutton">
          <div className="quantitydiv">
              <h4>Select Quantity:</h4>
              <label>
                <div>{errors.quantity}</div>
                  <select value={values.quantity} onChange={onChange} name="quantity" >
                    <option value="">Select Quantity</option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                  </select>
              </label>
          </div>
          <div>
            <button disabled={disabled}> Submit Order</button>

          </div>
        </div>




      </div>
    </form>

  )

}