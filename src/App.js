import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Form from "./components/Forms";
import { LinearProgress } from "@mui/material"

function App() {
  const [questionsComplete, setQuestionsComplete] = React.useState(false);
  const [results, setResults] = React.useState({
    O: 0,
    C: 0,
    E: 0,
    A: 0,
    N: 0,
  });


  return (
    <div className="App">
      {!questionsComplete ? (
        <Form
          setQuestionsComplete={setQuestionsComplete}
          setResults={setResults}
        />
      ) : (
        <div>
          <p>Openness: {results.O}%</p>
          <LinearProgress variant="determinate" value={results.O} />
          <p>Conscientiousness: {results.C}%</p>
          <LinearProgress variant="determinate" value={results.C} />
          <p>Extravertedness: {results.E}%</p>
          <LinearProgress variant="determinate" value={results.E} />
          <p>Agreeableness: {results.A}%</p>
          <LinearProgress variant="determinate" value={results.A} />
          <p>Neuroticism: {results.N}%</p>
          <LinearProgress variant="determinate" value={results.N} />
        </div>
      )}
    </div>
  );
}

export default App;
