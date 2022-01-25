import logo from './logo.svg';
import './App.css';
import React from 'react';

import Form from './components/Forms';

function App() {

  const [results, setResults] = React.useState({
    O: 0,
    C: 0,
    E: 0,
    A: 0,
    N: 0
  })

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
