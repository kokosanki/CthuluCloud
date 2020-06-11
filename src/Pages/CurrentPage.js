import React, { useState } from "react";
// eslint-disable-next-line
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
  Link,
  useHistory,
} from "react-router-dom";
import HomePage from "./HomePage";
import CharacterPage from "./CharacterPage";
import Navigation from "../Components/Navigation";
import CharacterSkills from "./CharacterSkills";
import CharacterEquipment from "./CharacterEquipment";
import CharacterJournal from "./CharacterJournal";
import CharacterPersonality from "./CharacterPersonality";
import CharacterModal from "../Components/CharacterModal";
import { v4 as uuidv4 } from "uuid";
import CharacterNavigation from "../Components/CharacterNavigation";

const CurrentPage = () => {
  const [isModalVisible, setDisplayModal] = React.useState(false);

  const [characterList, setNewCharacter] = React.useState([]);

  const addCharacter = (e) => {
    e.preventDefault();
    if (e.target.name.value.length <= 0) {
      alert("Please, type a name.");
    } else {
      const name = e.target.name.value;
      const id = uuidv4();
      setNewCharacter([...characterList, { name, id }]);
      setDisplayModal(false);
    }
  };
  const match = useRouteMatch("/characters/:id");
  return (
    <>
      <Navigation />

      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <HomePage
              setDisplayModal={setDisplayModal}
              isModalVisible={isModalVisible}
              addCharacter={addCharacter}
              characterList={characterList}
              {...props}
            />
          )}
        />
        <Route
          path="/characters/:id"
          exact
          render={(props) => (
            <CharacterPage
              setDisplayModal={setDisplayModal}
              isModalVisible={isModalVisible}
              addCharacter={addCharacter}
              characterList={characterList}
              match={match}
              {...props}
            />
          )}
        />

        <Route
          exact
          path="/characters/skills/:id"
          component={CharacterSkills}
        />
        <Route
          exact
          path="/characters/equipment/:id"
          component={CharacterEquipment}
        />
        <Route
          exact
          path="/characters/journal/:id"
          component={CharacterJournal}
        />
        <Route
          exact
          path="/characters/personality/:id"
          component={CharacterPersonality}
        />
      </Switch>
    </>
  );
};

export default CurrentPage;
