import React from "react";

const CharacterSkills = () => {
  const skills = [
    { skill: "Accounting", value: 0.05 },
    { skill: "Anthropology", value: 0.01 },
    { skill: "Appraise", value: 0.05 },
    { skill: "Archeology", value: 0.01 },
    { skill: "Art/Craft", value: 0.05 },
    { skill: "Charm", value: 0.15 },
    { skill: "Climb", value: 0.2 },
    { skill: "Credit Rating", value: 0 },
    { skill: "Cthulu Mythos", value: 0 },
    { skill: "Disguise", value: 0.05 },
    { skill: "Dodge", value: "half DEX" },
    { skill: "Drive Auto", value: 0.2 },
    { skill: "Elec Repair", value: 0.1 },
    { skill: "Fast Talk", value: 0.05 },
    { skill: "Fighting Brawl", value: 0.25 },
    { skill: "Firearms (Handguns)", value: 0.2 },
    { skill: "Firearms (Rifle/Shotgun)", value: 0.25 },
    { skill: "First Aid", value: 0.3 },
    { skill: "History", value: 0.05 },
    { skill: "Intimidate", value: 0.15 },
    { skill: "Jump", value: 0.2 },
    { skill: "Language (Other)", value: 0.01 },
    { skill: "Language (Own) (EDU)", value: 0 },
    { skill: "Law", value: 0.05 },
    { skill: "Library Use", value: 0.2 },
    { skill: "Listen", value: 0.2 },
    { skill: "Locksmith", value: 0.01 },
    { skill: "Mech. Repair", value: 0.1 },
    { skill: "Medicine", value: 0.01 },
    { skill: "Natural World", value: 0.1 },
    { skill: "Navigate", value: 0.1 },
    { skill: "Occult", value: 0.05 },
    { skill: "Op. Hv. Machine", value: 0.01 },
    { skill: "Persuade", value: 0.1 },
    { skill: "Pilot", value: 0.01 },
    { skill: "Psychology", value: 0.1 },
    { skill: "Psychoanalysis", value: 0.01 },
    { skill: "Ride", value: 0.05 },
    { skill: "Science", value: 0.01 },
    { skill: "Sleight of Hand", value: 0.1 },
    { skill: "Spot Hidden", value: 0.25 },
    { skill: "Stealth", value: 0.2 },
    { skill: "Survival", value: 0.1 },
    { skill: "Swim", value: 0.2 },
    { skill: "Throw", value: 0.2 },
    { skill: "Track", value: 0.1 },
  ];
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.skill}>
            {" "}
            <input type="checkbox" /> <label>{skill.skill}</label>{" "}
            <input type="number" placeholder={skill.value} />
            <sup>{(skill.value / 2).toString()}</sup>
            <sub>{(skill.value / 5).toString()}</sub>
          </li>
        ))}
      </ul>
      <button>Add a new skill</button>
    </div>
  );
};

export default CharacterSkills;
