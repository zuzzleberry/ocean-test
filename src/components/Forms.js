import React from "react";
import questionData from "../data/oceanQuestions";
import "./Forms.css";
import { Button, Radio, LinearProgress } from "@mui/material";

const Form = ({ setQuestionsComplete, setResults }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const [questions, setQuestions] = React.useState(questionData);

  React.useEffect(() => {
    console.log(questions);
  }, [questions]);

  const valueChange = (e) => {
    // duplicate array and update current question entry with selected answer
    const newArr = [...questions];
    switch (e.target.value) {
        case "disagree":
            newArr[currentQuestion].a = 1;
            break;
        case "slightlyDisagree":
            newArr[currentQuestion].a = 2;
            break;
        case "neutral":
            newArr[currentQuestion].a = 3;
            break;
        case "slightlyAgree":
            newArr[currentQuestion].a = 4;
            break;
        case "agree":
            newArr[currentQuestion].a = 5;
            break;
        default:
            break;
    }
    setQuestions(newArr);
  };

  const nextQuestion = () => {

    // set to next question
    if (currentQuestion < questions.length - 1 && questions[currentQuestion].a !== null) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion + 1 === questions.length) {
      setQuestionsComplete(true);
      calculateResults(questions)
    }
  };


  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1)
  }

  const calculateResults = (questions) => {
    // These formulas for calculating the results are predefined by courtesy ipip.ori.org
    //    E = 20 + (1) ___        - (6) ___        + (11) ___        - (16) ___        + (21) ___        - (26) ___        + (31) ___        - (36) ___        + (41) ___        - (46) ___ = _____
    const e = 20 + questions[0].a - questions[5].a + questions[10].a - questions[15].a + questions[20].a - questions[25].a + questions[30].a - questions[35].a + questions[40].a - questions[45].a;    
    
    //    A = 14 - (2) ___        + (7) ___        - (12) ___        + (17) ___        - (22) ___        + (27) ___        - (32) ___        + (37) ___        + (42) ___        + (47) ___ = _____
    const a = 14 - questions[1].a + questions[6].a - questions[11].a + questions[16].a - questions[21].a + questions[26].a - questions[31].a + questions[36].a + questions[41].a + questions[46].a;         
      
    //    C = 14 + (3) ___        - (8) ___        + (13) ___        - (18) ___        + (23) ___        - (28) ___        + (33) ___        - (38) ___        + (43) ___        + (48) ___ = _____
    const c = 14 + questions[2].a - questions[7].a + questions[12].a - questions[17].a + questions[22].a - questions[27].a + questions[32].a - questions[37].a + questions[42].a + questions[47].a;
    
    //    N = 38 - (4) ___        + (9) ___        - (14) ___        + (19) ___        - (24) ___        - (29) ___        - (34) ___        - (39) ___        - (44) ___        - (49) ___ = _____
    const n = 38 - questions[3].a + questions[8].a - questions[13].a + questions[18].a - questions[23].a - questions[28].a - questions[33].a - questions[38].a - questions[43].a - questions[48].a;

    //    O = 8 + (5) ___        - (10) ___       + (15) ___        - (20) ___        + (25) ___        - (30) ___        + (35) ___        +  (40) ___       + (45) ___        + (50) ___       = _____ 
    const o = 8 + questions[4].a - questions[9].a + questions[14].a - questions[19].a + questions[24].a - questions[29].a + questions[34].a + questions[39].a + questions[44].a + questions[49].a;
  
    setResults({
      O: Math.floor(o / 40 * 100),
      C: Math.floor(c / 40 * 100),
      E: Math.floor(e / 40 * 100),
      A: Math.floor(a / 40 * 100),
      N: Math.floor(n / 40 * 100),
    });
}

  return (
    <div className="Questionnaire">
      <h2 className="Question">{questions[currentQuestion].q}</h2>

      <table className="Answers" onChange={valueChange}>
        <tbody>
          <tr>
            <td>Disagree</td>
            <td>
              <Radio
                type="radio"
                value="disagree"
                name="answer"
                checked={questions[currentQuestion].a === 1}
              ></Radio>
            </td>
          </tr>

          <tr>
            <td>Slightly disagree</td>
            <td>
              <Radio
                type="radio"
                value="slightlyDisagree"
                name="answer"
                checked={questions[currentQuestion].a === 2}
              ></Radio>
            </td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>
              <Radio
                type="radio"
                value="neutral"
                name="answer"
                checked={questions[currentQuestion].a === 3}
              ></Radio>
            </td>
          </tr>
          <tr>
            <td>Slightly agree</td>
            <td>
              <Radio
                type="radio"
                value="slightlyAgree"
                name="answer"
                checked={questions[currentQuestion].a === 4}
              ></Radio>
            </td>
          </tr>
          <tr>
            <td>Agree</td>
            <td>
              <Radio
                type="radio"
                value="agree"
                name="answer"
                checked={questions[currentQuestion].a === 5}
              ></Radio>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="Buttons">
       <Button variant="contained" onClick={prevQuestion}>Previous</Button>
       <Button variant="contained" onClick={nextQuestion}>Next</Button>
      </div>
      
      <LinearProgress variant="determinate" value={currentQuestion * 2} />
      <p className="CurrentQuestion">{currentQuestion + 1}/{questions.length}</p>
    </div>
  );
};

export default Form;
