import React from "react";
import "./App.css";
import Drum from "./components/Drum";
const soundBank = [
  {
    id: "Q",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    keyName: "Heater-1",
  },
  {
    id: "W",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    keyName: "Heater-2",
  },
  {
    id: "E",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    keyName: "Heater-3",
  },
  {
    id: "A",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    keyName: "Heater-4",
  },
  {
    id: "S",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    keyName: "Heater-6",
  },
  {
    id: "D",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    keyName: "Dsc Oh",
  },
  {
    id: "Z",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    keyName: "Kick n Hat",
  },
  {
    id: "X",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    keyName: "RP4 Kick 1",
  },
  {
    id: "C",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    keyName: "Cev H2",
  },
];

function App() {
  return (
    <div id="drum-machine">
      <div className="display" id="display">
        {soundBank.map((sound, index) => (
          <Drum
            text={sound.id}
            key={index}
            audio={sound.mp3}
            name={sound.keyName}
          />
        ))}{" "}
        <h1></h1>
      </div>
    </div>
  );
}

export default App;
