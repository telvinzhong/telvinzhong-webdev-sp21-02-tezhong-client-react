import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";

const Quiz = () => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])
    const {quizId} = useParams()
    return(
        <div className="container">
            <h3>Quiz {quizId} </h3>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return(
                            <li className="list-group-item">
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz
