import "./App.css";
import useCount from "./hooks/useCount";

function App() {
  const [count, increment, reset] = useCount();

  return (
    <>
      <h1 className="mt-8 text-center uppercase text-red-500">
        Button Counter
      </h1>
      <p className="my-8 text-center text-5xl">{count}</p>
      <button
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        type="button"
        onClick={increment}
      >
        Click me!
      </button>
      <button
        className="rounded bg-orange-500 py-2 px-4 font-bold  hover:bg-orange-700"
        type="button"
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
}

export default App;
