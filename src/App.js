import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./Create";
import Read from "./Read";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Update from "./Update";
const App = () =>{
  return (
    
  
    <Router>
      <div className="container">
        <h1 className="text-center">CRUD</h1>
          <Switch>
            <Route path="/create">
               <Create />    
            </Route>
            <Route path="/Read">
              <Read />
            </Route>
            <Route path="/Update">
              <Update />
            </Route>
          </Switch>
      </div>
      </Router>
    
  )
}
export default App;