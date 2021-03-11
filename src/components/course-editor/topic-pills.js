import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"

const TopicPill = (
    {
        topics = [],
        createTopic,
        deleteTopic,
        updateTopic,
        findTopicForLesson
    }) => {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams()
    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicForLesson(lessonId)
        }
    }, [lessonId])
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findTopicForLesson(lessonId)
        }
    }, [lessonId])
    return (
    <div>
        <h2>Topics</h2>
        <ul className="nav nav-pills nav-cell">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                            <EditableItem
                                to={`/courses/${layout}/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                item={topic}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}
                                active={topic._id === topicId}
                            />
                        </a>
                    </li>
                )
            }
            <li className="nav-item">
                <i onClick={() => createTopic(lessonId)} className="nav-link fas fa-plus plus btn btn-sm" id="plus-topic"></i>
            </li>

        </ul>
    </div>)
}

const stmp = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(topic => dispatch({
                    type: "CREATE_TOPIC",
                    topic
                }))
        },
        deleteTopic: (item) => {
            topicService.deleteTopic(item._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    item
                }))
        },
        updateTopic: (topic) => {
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                }))
        },
        findTopicForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics
                }))
        }
    }
}

export default connect(stmp, dtpm)(TopicPill);