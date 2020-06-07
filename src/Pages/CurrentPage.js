import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import CharacterPage from "./CharacterPage";
import Navigation from "../Components/Navigation";

const CurrentPage = () => {
  return (
    <>
      <Navigation />
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/character" component={CharacterPage} />
          <Route path="/characters/:id" component={CharacterPage} />
      </Switch>
    </>
  );
};

export default CurrentPage;
