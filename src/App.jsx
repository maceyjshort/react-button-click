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

function App() {
  const state = {};
  return (
    <>
      <h1 className="mt-8 text-center uppercase text-red-500">
        Button Counter
      </h1>

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
