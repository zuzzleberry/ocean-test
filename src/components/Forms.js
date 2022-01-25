import React from "react";


const Form = () => {

    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    const [questions, setQuestions] = React.useState([
        {
            q: "Why did you do that?",
            a: null
        },
        {
            q: "When will you fix the sink?",
            a: null
        },
        {
            q: "Who are you",
            a: null
        }
    ])

    React.useEffect(() => {
        console.log(questions)
    }, [questions])

    const valueChange = (e) => {
        const newArr = [...questions];
        newArr[currentQuestion].a = e.target.value
        setQuestions(newArr)

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    return (
        <div>
            {questions[currentQuestion].q}
            <div className="Answers" onChange={valueChange}>
                <p>Never</p>
                <input type="radio" value="never" name="answer"></input>
                <p>Sometimes</p>
                <input type="radio" value="sometimes" name="answer"></input>
                <p>Often</p>
                <input type="radio" value="often" name="answer"></input>
                <p>Always</p>
                <input type="radio" value="always" name="answer"></input>
            </div>
        </div>
    )
}



export default Form;