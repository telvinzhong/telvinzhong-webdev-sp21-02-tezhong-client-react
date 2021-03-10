const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            const newState = {
                topics: [
                    ...state.topics,
                    {
                        title: "New Topic",
                        _id: (new Date()).getTime()
                    }
                ]
            }
            return newState
        case "DELETE_TOPIC":
            const newState1 = {
                topics: state.topics.filter(topic => topic._id !== action.item._id)
            }
            return newState1
        case "UPDATE_TOPIC":
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