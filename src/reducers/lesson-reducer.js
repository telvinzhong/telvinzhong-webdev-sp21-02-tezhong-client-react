const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...action,
                lessons: action.lessons
            }

        case "CREATE_LESSON":
            // alert("create lesson ")
            const newState = {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
            return newState
        case "DELETE_LESSON":
            alert("Removing lesson " + action.lessonToDelete.title)
            const newState1 = {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonToDelete._id)
            }
            return newState1
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(lesson => {
                    if(lesson._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return lesson
                    }
                })
            }
        default:
            return state
    }
}

export default lessonReducer;