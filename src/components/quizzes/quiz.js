import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Question from "./questions/question";

import quizService from "../../services/quiz-service";
// import async from "async";

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [highlight, setHighlight] = useState(false)
    const [attempts, setAttempts] = useState([])

    const getAttempts = () => {
        quizService.findAttemptsForQuiz(quizId)
            .then(attempt => {
                console.log(attempt)
                setAttempts(attempt)
            })
    }
    useEffect(() => {
        quizService.findQuestionForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [quizId, highlight])

    return(
        <div className="container">
            <Link to={"/courses/table"} >Go back</Link>
            <h3>Quiz {quizId} </h3>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return(
                            <li className="list-group-item">
                                <Question question={question}
                                          highlight={highlight}
                                />
                                {/*{JSON.stringify(question)}*/}
                            </li>
                        )
                    })
                }
            </ul>
            <br/>

            <Link to="#" className="btn btn-success"
                  onClick={async () => {
                      setHighlight(true)
                      quizService.submitQuiz(quizId, questions).then(attempt => {
                          // getAttempts()
                          setAttempts(attempt)
                      })
                  }}
                >
                Submit
            </Link>
            <br/>
            <div>
                {highlight &&
                    <>
                        <br/>
                        <h5>Your Scores: {attempts.score}</h5>
                    </>
                }
            </div>
        </div>
    )
}

export default Quiz