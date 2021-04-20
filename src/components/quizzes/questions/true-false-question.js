import React, {useState} from "react";
import {Link} from "react-router-dom";
import {submitQuiz} from "../../../services/quiz-service";

const TrueFalseQuestion = ({question, highlight}) => {
    const [yourAnswer, setYourAnswer] = useState('')

    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === yourAnswer && (yourAnswer !== '') && highlight &&
                    <i className="fas fa-check check-quiz correct"/>
                }
                {
                    (question.correct !== yourAnswer) && (yourAnswer !== '') && highlight &&
                    <i className="fas fa-times check-quiz wrong"/>
                }
            </h5>
            <ul className="list-group">
                <li className={`list-group-item
                        ${ (yourAnswer !== question.correct) && (yourAnswer === 'true') && highlight ? 'list-group-item-danger' : ''}
                        ${ (question.correct === 'true') && highlight ? 'list-group-item-success' : ''}`}>
                    <label>
                        <input
                            onClick={() => {
                                setYourAnswer('true')
                                question.answer = 'true'
                            }}
                            type="radio"
                            name={question._id}
                            disabled={highlight}
                        /> TRUE
                        {
                            (question.correct === 'true') && highlight &&
                            <i className="fas fa-check check-quiz"/>
                        }
                        {
                            (question.correct !== yourAnswer) && (yourAnswer === 'true') && highlight &&
                            <i className="fas fa-times check-quiz"/>
                        }
                    </label>
                </li>
                <li className={`list-group-item
                        ${(yourAnswer !== question.correct) && (yourAnswer === 'false') && highlight? 'list-group-item-danger' : ''}
                        ${(question.correct === 'false') && highlight? 'list-group-item-success' : ''}`}>
                    <label>
                        <input onClick={() => {
                            setYourAnswer('false')
                            question.answer = 'false'
                        }}
                               type="radio"
                               name={question._id}
                               disabled={highlight}
                        /> FALSE
                        {
                            (question.correct === 'false') && highlight &&
                            <i className="fas fa-check check-quiz"/>
                        }
                        {
                            (question.correct !== yourAnswer) && (yourAnswer === 'false') && highlight &&
                            <i className="fas fa-times check-quiz"/>
                        }
                    </label>
                </li>
            </ul>
            <br/>

            <p>
                Your answer: {yourAnswer}
            </p>
            {/*<Link to="#" className="btn btn-success"*/}
            {/*      onClick={_submit}>*/}
            {/*    Submit*/}
            {/*</Link>*/}
        </div>
    )
}

export default TrueFalseQuestion