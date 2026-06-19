import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Hello from React!');

  return (
    <div className="app">
      <h1>React Component Data Share</h1>
      <p>{message}</p>
      <button onClick={() => setMessage('Data updated!')}>Update message</button>
    </div>
  );
}

export default App;
