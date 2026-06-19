import { useState } from 'react';
import CheckboxSelector from './CheckboxSelector';
import SelectedMessage from './SelectedMessage';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="app">
      <h1>React Component Data Share</h1>
      <CheckboxSelector selected={selectedOption} onChange={setSelectedOption} />
      <SelectedMessage selected={selectedOption} />
    </div>
  );
}

export default App;
