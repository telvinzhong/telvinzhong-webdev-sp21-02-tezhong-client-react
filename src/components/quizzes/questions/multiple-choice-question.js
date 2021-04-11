import React, {useState} from "react";
import {Link} from "react-router-dom";

const MultiChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState('')
    const [highlight, setHighlight] = useState(false)
    const _submit = () => {
        setHighlight(true)
    }
    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === yourAnswer && (yourAnswer !== '') && highlight &&
                    <i className="fas fa-check check-quiz correct"/>
                }
                {
                    question.correct !== yourAnswer && (yourAnswer !== '') && highlight &&
                    <i className="fas fa-times check-quiz wrong"/>
                }
            </h5>
            <ul className="list-group">
                {question.choices.map((choice) => {
                    return(
                        <li className={`list-group-item
                        ${ (yourAnswer !== question.correct) && (choice === yourAnswer) && highlight? 'list-group-item-danger' : ''}
                        ${ (choice === question.correct) && highlight? 'list-group-item-success' : ''}`}>
                            <label>
                                <input
                                    onClick={() => setYourAnswer(choice)}
                                    type="radio"
                                    name={question._id}
                                    disabled={highlight}
                                /> {choice}
                                <>
                                    {
                                        (question.correct === choice) && highlight &&
                                        <i className="fas fa-check check-quiz"/>
                                    }
                                    {
                                        (question.correct !== yourAnswer) && (choice === yourAnswer) && highlight &&
                                        <i className="fas fa-times check-quiz"/>
                                    }
                                </>

                            </label>
                        </li>

                    )
                })}

            </ul>
            <br/>
            <p>Your answer: {yourAnswer}</p>

            <Link to="#" className="btn btn-success"
                  onClick={_submit}>
                Grade
            </Link>
        </div>
    )
}

export default MultiChoiceQuestion;
