import React, { useState } from 'react';
import './App.css';
import Search from './components/Search.js';
import Results from './components/Results';
import { Container } from 'bloomer';

function App() {
  const [results, setResults] = useState(false);
  const [resultData, setResultData] = useState([]);

  return (
    <Container>
      <Search setResultData={setResultData} setResults={setResults} />
      <hr />
      { results ? <Results data={resultData} /> : null }
    </Container>
  );
}

export default App;
