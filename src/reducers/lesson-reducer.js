const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.lessonToBeUpdated._id) {
                        return action.lessonToBeUpdated
                    } else {
                        return lesson
                    }
                })
            }
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => {
                    if (lesson._id === action.lessonToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
        default:
            return state
    }
}

export default lessonReducer