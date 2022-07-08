import { useState, useMemo } from "react";
import { useAtom, atom } from "jotai";
import { countAtom, countryAtom, mangaAtom } from "./Jstate";
import { selectAtom, useAtomValue } from "jotai/utils";
function App() {
  const [count, setCount] = useAtom(countAtom);

  const testcount = useAtomValue(countAtom); // 값을 반환

  const [country, setCountry] = useAtom(countryAtom);

  const [value] = useAtom(
    useMemo(() => selectAtom(mangaAtom, (v) => v.Naruto.city), [])
  );
  // 값의 일부만 가져오고 싶을때 사용

  return (
    <div className="App">
      selectAtom : {value}
      <button onClick={() => setCount((c) => c + 1)}>one up</button>
      useAtom : {count}, useAtomValue{testcount}
      <h1 onClick={() => setCountry((c) => c + 1)}> useAtom : {country}</h1>
    </div>
  );
}

export default App;
