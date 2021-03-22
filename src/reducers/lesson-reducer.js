import {CREATE_LESSON, DELETE_LESSON, FIND_LESSONS_FOR_MODULE, UPDATE_LESSON} from "../components/actions/lesson-actions";

const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            const newState = {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
            return newState

        case FIND_LESSONS_FOR_MODULE:
            return {
                ...action,
                lessons: action.lessons
            }

        case DELETE_LESSON:
            const newState2 = {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonToDelete._id)
            }
            return newState2

        case UPDATE_LESSON:
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