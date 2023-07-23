import { useState } from 'react';
import './App.css';
import UnitControl from './component/UnitControl';
import CardFooter from './component/CardFooter';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const handleInputChange = (e) => {
    console.log("Change");
    const {value} = e.target;
    setInputValue(value);
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input type="number" value={inputValue} onChange={handleInputChange} className="input-number" min="0" />
          </div>
          <span className="angle-icon fa-2x" style={{ marginTop: '30px'}}>
            <i className="fas fa-angle-right" ></i>
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input type="text" className="input-number text-right" disabled value={inputValue/8} />
          </div>
        </div>
      </div>
      <CardFooter />
    </div>
  );
}

export default App;
