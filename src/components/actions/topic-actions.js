import topicService from "../../services/topic-service";

export const CREATE_TOPIC = "CREATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"

export const createTopic = (dispatch, lessonId) => {
    topicService.createTopicForLesson(lessonId, {title: "New Topic"})
        .then(topic => dispatch({
            type: CREATE_TOPIC,
            topic
        }))
}
export const deleteTopic = (dispatch, item) => {
    topicService.deleteTopic(item._id)
        .then(status => dispatch({
            type: DELETE_TOPIC,
            item
        }))
}
export const updateTopic = (dispatch, topic) => {
    topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({
            type: UPDATE_TOPIC,
            topic
        }))
}
export const findTopicForLesson = (dispatch, lessonId) => {
    topicService.findTopicForLesson(lessonId)
        .then(topics => dispatch({
            type: FIND_TOPICS_FOR_LESSON,
            topics
        }))
}

const TopicActions = {
    createTopic,
    deleteTopic,
    updateTopic,
    findTopicForLesson
}

export default TopicActions;