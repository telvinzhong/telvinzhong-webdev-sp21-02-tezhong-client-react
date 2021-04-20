import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Question from "./questions/question";

import quizService from "../../services/quiz-service";

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [highlight, setHighlight] = useState(false)
    const [attempts, setAttempts] = useState({})
    useEffect(() => {
        quizService.findQuestionForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
        quizService.findAttemptsForQuiz(quizId)
            .then(res => {
                setAttempts(res)
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
                  onClick={() => {
                      setHighlight(true)
                      quizService.submitQuiz(quizId, questions)
                  }}>
                Submit
            </Link>
            <br/>
            <div>
                {highlight &&
                    <>
                        <br/>
                        <h5>List Your Scores:</h5>
                        <ul className="list-group">
                            {
                                attempts.map((attempt) =>{
                                    return(
                                        <li className="list-group-item">
                                            {attempt.score}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </>
                }
            </div>
        </div>
    )
}

export default Quiz