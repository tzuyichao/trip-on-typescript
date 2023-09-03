import './App.css';
import { useState } from 'react';

const PLACEHOLDER = `conic-gradient(
  gray 0.25turn, white 0 0.5turn,
  gray 0 0.75turn, white 0 1turn
)`;

function HexColor() {
  const [color, setColor] = useState("BADA55");
  const onChange = (evt) => setColor(evt.target.value.replace(/[^0-9a-f]/gi, "").toUpperCase())
  const outputStyle = {
    width: "20px",
    border: "1px solid",
    background: color.length === 6 ? `#${color}`: PLACEHOLDER,
  };

  return (
    <form style={{ display: "flex" }}>
      <label>
        Hex color: 
        <input value={color} onChange={onChange} />
      </label>
      <span style={outputStyle} />
    </form>
  );
}

function Sum() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const onChangeFirst = (evt) =>
    setFirst(evt.target.valueAsNumber);
  const onChangeSecond = (evt) =>
    setSecond(evt.target.valueAsNumber);
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        A:
        <input type="number" value={first} onChange={onChangeFirst} />
      </label>
      <label>
        B:
        <input type="number" value={second} onChange={onChangeSecond} />
      </label>
      <div>A+B: {first + second}</div>
    </form>
  );
}

function App() {
  return (
    <div>
      <div><Sum /></div>
      <div><HexColor /></div>
    </div>
  );
}

export default App;
