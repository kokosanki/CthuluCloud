import React from "react";
import Character from "../Components/Character";
import CharacterSkills from "./CharacterSkills";
import CharacterEquipment from "./CharacterEquipment";
import CharacterJournal from "./CharacterJournal";
import CharacterNavigation from "../Components/CharacterNavigation";
import CharacterCharacteristics from "./CharacterCharacteristics";
import CharacterPersonality from "./CharacterPersonality";

const CharacterPage = ({ match, characterList }) => {
  const [chosenSite, setSite] = React.useState("Stats");
  return (
    <>
      <Character id={match.params.id} characterList={characterList} />
      <CharacterNavigation setSite={setSite} id={match.params.id} />

      <div>
        {(() => {
          switch (chosenSite) {
            case "Skills":
              return <CharacterSkills />;
            case "Journal":
              return <CharacterJournal />;
            case "Equipment":
              return <CharacterEquipment />;
            case "Personality":
              return <CharacterPersonality />;
            case "Stats":
              return <CharacterCharacteristics />;
            default:
              return null;
          }
        })()}
      </div>
    </>
  );
};

export default CharacterPage;
