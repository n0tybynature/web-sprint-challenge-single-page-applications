import React, { useState, useEffect }from "react";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Form"
import Home from "./Home"
import "./App.css"
import * as yup from "yup"
import axios from "axios"
import schema from "./validation/formSchema"
import PizzaForm from "./Form";
import Order from "./Order"

const initialPizzaForm = {
  name:"",
  style:"",
  size:"",
  sauce:"",
  instruction:"",
  pepperoni:false,
  extraCheese:false,
  sausage:false,
  mushroom:false,
  quantity:""
}

const initialPizzaErrors = {
  name:"",
  style:"",
  size:"",
  sauce:"",
  quantity:"",
}


const initialPizzaOrders = []
const initialDisabled = true


const App = () => {

  const [orders, setOrders] = useState(initialPizzaOrders)
  const [pizzaValues,setPizzaValues] = useState(initialPizzaForm)
  const [pizzaErrors,setPizzaErrors] = useState(initialPizzaErrors)
  const [disabled, setDisabled] = useState(initialDisabled)



  const getPizzaOrders = newPizza => {
    axios
      .post(`https://reqres.in/api/orders`, newPizza)
      .then(res => {
        setOrders([res.data,...orders])
        setPizzaValues(initialPizzaForm)
      })
  }




  const pizzaChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setPizzaErrors({
          ...pizzaErrors,
          [name]:"",
        })
      })
      .catch( err => {
        setPizzaErrors({
          ...pizzaErrors,
          [name]: err.errors[0],
        })
      })
      setPizzaValues({
        ...pizzaValues,
        [name]: value
      })
  }

  const pizzaSubmit = () => {
    const newPizza = {
      name: pizzaValues.name,
      size: pizzaValues.size,
      style: pizzaValues.style,
      sauce: pizzaValues.sauce,
      toppings:["pepperoni", "mushroom", "extraCheese", "sausage"].filter(topping =>{ return pizzaValues[topping]}),
      instruction: pizzaValues.instruction,
      quantity:pizzaValues.quantity


    }
    getPizzaOrders(newPizza)
  }

  useEffect(() => {
    getPizzaOrders()
  },[])

  useEffect(() => {
    schema.isValid(pizzaValues).then(valid => {
      setDisabled(!valid)
    })
  },[pizzaValues])




  return (
      <div className="app">  
        
        <nav>
          <header><h1>Lambda Eats</h1>
            <div className="nav-con">
              <ul>
                <Link to="/">Home</Link> 
                <Link to="/Order">Orders</Link>
              </ul>
            </div>

          </header>
        </nav>
        
          <Switch>


            <Route path ="/Form">
              <Form
              values={pizzaValues}
              change={pizzaChange}
              submit={pizzaSubmit}
              disabled={disabled}
              errors={pizzaErrors}

              />

            </Route>
            <Route path="/Order">
              <Order 
              details={orders}

              />
            </Route>

            <Route exact path="/" component={Home}>
            </Route>
          </Switch>
        
      
      </div>
      
  );
};
export default App;
