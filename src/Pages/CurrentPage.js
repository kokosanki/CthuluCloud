import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import CharacterCreator from "./CharacterCreator";
import Navigation from "../Components/Navigation";

const CurrentPage = () => {
  return (
    <>
      <Navigation />
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/charactercreator" component={CharacterCreator} />
      </Switch>
    </>
  );
};

export default CurrentPage;
