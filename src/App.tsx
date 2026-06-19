import { useEffect, useState } from 'react';
import axios from 'axios';
import CheckboxSelector from './CheckboxSelector';
import SelectedMessage from './SelectedMessage';
import './App.css';

type Option = {
  id: string;
  label: string;
};

function App() {
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get<Option[]>('/mock-data.json', {
          headers: {
            Authorization: 'Bearer dummy-token',
          },
        });

        setOptions(response.data);
        setError('');
      } catch (err) {
        setError('Failed to load options.');
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  return (
    <div className="app">
      <h1>React Component Data Share</h1>
      {loading ? (
        <p>Loading options…</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <CheckboxSelector options={options} selected={selectedOption} onChange={setSelectedOption} />
      )}
      <SelectedMessage selected={selectedOption} />
    </div>
  );
}

export default App;
