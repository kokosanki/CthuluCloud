import React, {useState} from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, useLocation, useRouteMatch, Link, useHistory } from "react-router-dom";
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
  // const location = useLocation().pathname.toString();
  const match = useRouteMatch("/characters/:id")
  console.log(match)
  let theID = '';
  if(match) {
    theID = match.params.id;
    console.log('match is true')
    console.log('the id ' + theID)
  }
  console.log('this is history ' + useHistory())
  return (
    <>
      <Navigation />
      {/* {location==="/characters/:id" ? <div>this is character page</div> : <div>this is not character page</div>} */}

      {/* {match ? <CharacterNavigation id={match.params.id} match={match} theID={theID} /> : <div>this is not character page</div>} */}
      {/* if(match) {
        <ul>
        <li><Link to={`/characters/${match.params.id}`}>Stats</Link></li>
        <li><Link to={`/characters/skills/${match.params.id}`}>Skills</Link></li>
        <li><Link to={`/characters/equipment/${match.params.id}`}>Equipment</Link></li>
        <li><Link to={`/characters/personality/${match.params.id}`}>Personality</Link></li>
        <li><Link to={`/characters/journal/${match.params.id}`}>Journal</Link></li>
      </ul>
      } */}
      
      <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route
              path="/"
              exact
              render={props => (
              <HomePage
                  setDisplayModal={setDisplayModal}
                  isModalVisible={isModalVisible}
                  addCharacter={addCharacter}
                  characterList={characterList}
                  {...props}
                />
                )}
            />
          {/* <Route path="/character" component={CharacterPage} /> */}
          <Route
              path="/characters/:id"
              exact
              render={props => (
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

          <Route exact path="/characters/skills/:id" component={CharacterSkills} />
          <Route exact path="/characters/equipment/:id" component={CharacterEquipment} />
          <Route exact path="/characters/journal/:id" component={CharacterJournal} />
          <Route exact path="/characters/personality/:id" component={CharacterPersonality} />
      </Switch>
    </>
  );
};

export default CurrentPage;
