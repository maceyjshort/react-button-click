import { useState } from "react";
import "./App.css";
import ButtonCounter from "./components/ButtonCounter";

const buttons = [
  {
    txt: "Button 1",
  },
  {
    txt: "Button 2",
  },
  {
    txt: "Button 3",
  },
];

// I will admit I stink at Map I need to get a lot better... I hate this....
function App() {
  // TODO: MAP over ButtonCounter in order to recieve txt as a prop in order to use it
  return (
    <>
      <h1 className="mt-8 text-center uppercase text-red-500">
        Button Counter
      </h1>
      // TODO: Make sure MAP function works and then delete these buttons
      <ButtonCounter />
      <ButtonCounter />
      <ButtonCounter />
      <ButtonCounter />
      <ButtonCounter />
      <ButtonCounter />
    </>
  );
}

export default App;
