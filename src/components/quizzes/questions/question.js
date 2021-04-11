import React from "react";
import MultiChoiceQuestion from "./multiple-choice-question";
import TrueFalseQuestion from "./true-false-question";

const Question = ({question}) => {
    return(
        <div>
            {
                question.type === "MULTIPLE_CHOICE" &&
                    <MultiChoiceQuestion question={question}/>
            }
            {
                question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion question={question}/>
            }
        </div>
    )
}

export default Question
