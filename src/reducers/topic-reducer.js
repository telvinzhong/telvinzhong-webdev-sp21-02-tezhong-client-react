import {CREATE_TOPIC, DELETE_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC} from "../actions/topic-actions";

const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            const newState = {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
            return newState

        case FIND_TOPICS_FOR_LESSON:
            return {
                ...state,
                topics: action.topics
            }

        case DELETE_TOPIC:
            const newState = {
                topics: state.topics.filter(topic => topic._id !== action.item._id)
            }
            return newState

        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(topic => {
                    if(topic._id === action.topic._id) {
                        return action.topic
                    }
                    return topic
                })
            }

        default:
            return state
    }
}

export default topicReducer;