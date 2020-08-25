import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./components/Upload";
import ExpenseInput from "./components/ExpenseInput";

class App extends Component {

    render() {
    return (
        <div className="App">
          <Home/>
          <Router>
            <Switch>
              <Switch>
                <Route exact path="/">
                  <Upload />
                </Route>
                <Route path="/ExpenseInput">
                  <ExpenseInput />
                </Route>
              </Switch>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;