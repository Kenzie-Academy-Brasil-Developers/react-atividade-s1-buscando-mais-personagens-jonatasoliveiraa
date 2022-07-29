import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setcurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    fetch(currentPage)
      .then((res) => res.json())
      .then((res) => {
        setcurrentPage(res.info);
        setCharactersList(res.results);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  function nextPage() {
    if (currentPage.next !== null) {
      setcurrentPage(currentPage.next);
    }
  }
  function prevPage() {
    if (currentPage.prev !== null) {
      setcurrentPage(currentPage.prev);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Characters charactersList={charactersList} nextPage={nextPage} prevPage={prevPage}/>
      </header>
    </div>
  );
}

export default App;
