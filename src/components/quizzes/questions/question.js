import React from "react";
import MultiChoiceQuestion from "./multiple-choice-question";
import TrueFalseQuestion from "./true-false-question";

const Question = ({question, highlight}) => {
    return(
        <div>
            {
                question.type === "MULTIPLE_CHOICE" &&
                    <MultiChoiceQuestion question={question} highlight={highlight}/>
            }
            {
                question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion question={question} highlight={highlight}/>
            }
        </div>
    )
}

export default Question