import { useState } from 'react';
import './App.css';
import UnitControl from './component/UnitControl';
import CardFooter from './component/CardFooter';
import UnitConverter from './component/UnitConverter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

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
