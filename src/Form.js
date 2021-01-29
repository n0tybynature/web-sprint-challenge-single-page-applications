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

        <div className="stylediv">
          <h4>Style of Size</h4>
          <label> Sicilian
          <input type="radio" onChange={onChange} name="style"/>
          </label>
          <label> Chicago
          <input type="radio" onChange={onChange} name="style"/>
          </label>
          <label> New York
          <input type="radio" onChange={onChange} name="style"/>
          </label>
          <label> Detriot
          <input type="radio" onChange={onChange} name="style"/>
          </label>
          
        </div>



        <div className="sizediv">
          <h4>Choice of Size</h4>
          <label>Select Size:
            <select onChange={onChange} name="size">
              <option value="">Select an option</option>
              <option value="small">Small 8'</option>
              <option value="mediumn">Medium 12'</option>
              <option value="large">Large 16'</option>
              <option value="x-large">X-Large 20'</option>
            </select>
          </label>
        </div>

        <div className="saucediv">
          <h4>Choice of Sauce</h4>
          <label> Red Sauce
          <input type="radio" onChange={onChange} name="sauce"/>
          </label>
          <label> White Sauce
          <input type="radio" onChange={onChange} name="sauce"/>
          </label>
          <label> No Sauce
          <input type="radio" onChange={onChange} name="sauce"/>
          </label>
        </div>

        <div className="toppingdiv">
          <h4>Choice of Toppings</h4>
          <label>Pepperoni
            <input type="radio" onChange={onChange} name="topping"/>
          </label>
          <label>Xtra Cheese
            <input type="radio" onChange={onChange} name="topping"/>
          </label>
          <label>Sausage
            <input type="radio" onChange={onChange} name="topping"/>
          </label>
          <label>Mushroom
            <input type="radio" onChange={onChange} name="topping"/>
          </label>

        </div>

        <div className="instructdiv">
          <h4>Special Instructions</h4>
          <input type="text" onChange={onChange} name="instruction"/>
        </div>




      </div>
    </form>

  )

}