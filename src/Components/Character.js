import React from "react";

const Character = (props) => {
  return (
    <article className="character">
      <h1>{props.id}</h1>
    </article>
  );
};

export default Character;
