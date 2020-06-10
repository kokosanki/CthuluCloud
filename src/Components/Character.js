import React from "react";

const Character = ({id, characterList}) => {
  const character = characterList.find(item => item.id === id)
  console.log(character.name)
  return (
    <article className="character">
      <h1>{character.name}</h1>
    </article>
  );
};

export default Character;
