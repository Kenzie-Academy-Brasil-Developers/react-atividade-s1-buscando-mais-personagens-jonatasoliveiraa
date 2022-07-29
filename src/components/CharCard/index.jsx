import styles from "./styles.module.css";

function CharCard({ character }) {
  return (
    <div className={styles.container}>
      <div className={character.status === "Alive" ? styles.card : styles.cardDead}>
        {character.name}
        <div>
          <img src={character.image} alt="" />
        </div>
        {character.species}
      </div>
    </div>
  );
}
export default CharCard;
