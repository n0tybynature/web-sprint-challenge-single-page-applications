import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Form"
import Home from "./Home"
import "./App.css"




const App = () => {
  return (
    
      <div className="app">  
        <nav>
          <header><h1>Lambda Eats</h1>
            <div className="nav-con">
              <ul>
                <Link to="/">Home</Link> 
                
              </ul>
            </div>

          </header>
        </nav>
        
          <Switch>


            <Route path ="/Form">
              <Form/>

            </Route>


            <Route exact path="/" component={Home}>
            </Route>
          </Switch>
        
      
      </div>
      
  );
};
export default App;
