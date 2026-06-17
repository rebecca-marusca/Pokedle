function Tile({ letter, status }) {
  return <div className={`tile ${status || "empty"}`}>{letter}</div>;
}

export default Tile;
