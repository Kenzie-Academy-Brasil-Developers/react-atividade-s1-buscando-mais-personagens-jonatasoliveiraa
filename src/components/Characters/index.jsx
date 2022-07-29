import CharCard from "../CharCard";
import styles from "./styles.module.css";

function Characters({ charactersList,nextPage,prevPage }) {
  return (
    <>
      <h1>Meus Personagens</h1>
      <div >
      <button onClick={prevPage}>Voltar</button>
      <button onClick={nextPage}>Avançar</button>

      </div>

      <div className={styles.container}>
        {charactersList.map((elem) => {
          return <CharCard key={elem.id} character={elem} />;
        })}
      </div>
    </>
  );
}
export default Characters;
