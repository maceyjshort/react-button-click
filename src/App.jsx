import "./App.css";
import ButtonCounter from "./components/ButtonCounter";

const buttons = [
  {
    id: 1,
    txt: "Button 1",
  },
  {
    id: 2,
    txt: "Button 2",
  },
  {
    id: 3,
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
      {buttons.map(({ txt, id }) => (
        <ButtonCounter txt={txt} key={id} />
      ))}
    </>
  );
}

export default App;
