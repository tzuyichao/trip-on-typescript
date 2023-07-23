import { useState } from 'react';
import './App.css';
import UnitControl from './component/UnitControl';
import CardFooter from './component/CardFooter';
import UnitConverter from './component/UnitConverter';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const handleInputChange = (e) => {
    const {value} = e.target;
    setInputValue(value);
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter handleInputChange={handleInputChange} inputValue={inputValue} />
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
}

export default App;
