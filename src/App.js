import React, { useState } from 'react';
import './App.css';
import Search from './components/Search.js';
import Results from './components/Results';
import { Container } from 'bloomer';

function App() {
  const [results, setResults] = useState(false);
  const [resultData, setResultData] = useState([]);

  function getResults(entries){
    setResultData(entries);
  }

  return (
    <Container>
      <Search setResultData={setResultData} getResults={getResults} />
      <hr />
      { results ? <Results data={resultData} visible={setResults} /> : null }
    </Container>
  );
}

export default App;
