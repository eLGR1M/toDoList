import "./App.scss";

import React from "react";
import ToDoSelected from "./ToDoSelected";
import ListOfDirectories from "./ListOfDirectories";
import Menu from "./components/menu";
import Footer from "./components/footer";
import { Redirect } from "react-router-dom";

import { Context, useContextFunctions } from "./Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const userContext = useContextFunctions();
  const content = () => {
    return (
      <>
        {/*<Menu />*/}
        <ListOfDirectories />
        <ToDoSelected />
      </>
    )
  };

  return (
    <Context.Provider value={userContext}>
      <Menu/>
        <div className="app-content">
          <Router>
            {userContext.keySelected === null ? (
              <Redirect exact to={"/"} />
            ) : null}
            <Switch>
              <Route exact path={"/"}>
                {content()}
              </Route>
              <Route path={`/directory/${userContext.keySelected}`}>
                {content()}
              </Route>
            </Switch>
          </Router>
        </div>
      <Footer />
    </Context.Provider>
  );
}
