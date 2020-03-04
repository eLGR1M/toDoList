import "./App.scss";

import React from "react";
import ToDoSelected from "./ToDoSelected";
import ListOfDirectories from "./ListOfDirectories";
import { Redirect } from "react-router-dom";

import { Context, useContextFunctions } from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const userContext = useContextFunctions();

  return (
    <Context.Provider value={userContext}>
      <div className="app">
        <div className="app-content">
          <Router>
            {userContext.keySelected === null ? (
              <Redirect exact to={"/"} />
            ) : null}
            <Switch>
              <Route exact path={"/"}>
                <ListOfDirectories />
                <ToDoSelected />
              </Route>
              <Route path={`/directory/${userContext.keySelected}`}>
                <ListOfDirectories />
                <ToDoSelected />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </Context.Provider>
  );
}
