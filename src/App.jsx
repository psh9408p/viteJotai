import { useState } from "react";
import { useAtom, atom } from "jotai";
import { countAtom, countryAtom } from "./Jstate";

function App() {
  const [count, setCount] = useAtom(countAtom);
  const [country, setCountry] = useAtom(countryAtom);
  return (
    <div className="App">
      <h1 onClick={() => setCountry((c) => c + 1)}>
        {count}
        <button onClick={() => setCount((c) => c + 1)}>one up</button>
      </h1>
      {country}
    </div>
  );
}

export default App;
