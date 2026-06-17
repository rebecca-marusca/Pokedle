function Keyboard({ onKey, letterStatuses }) {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"];

  function renderKey(key) {
    const isSpecial = key === "Enter" || key === "Backspace";
    const status = letterStatuses[key.toLowerCase()];
    console.log(key, status);
    return (
      <button
        key={key}
        className={`key ${isSpecial ? "key--wide" : ""} ${status || ""}`}
        onClick={() => onKey(key)}
      >
        {key === "Backspace" ? "⌫" : key.toUpperCase()}
      </button>
    );
  }

  return (
    <div className="keyboard">
      <div className="keyboard-row">{row1.map(renderKey)}</div>
      <div className="keyboard-row">{row2.map(renderKey)}</div>
      <div className="keyboard-row">{row3.map(renderKey)}</div>
    </div>
  );
}

export default Keyboard;
