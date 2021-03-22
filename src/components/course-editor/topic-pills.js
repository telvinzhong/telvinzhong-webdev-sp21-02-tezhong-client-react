import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import TopicActions from "../actions/topic-actions";

const TopicPill = (
    {
        topics = [],
        createTopic,
        deleteTopic,
        updateTopic,
        findTopicForLesson,
        clearTopic
    }) => {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams()
    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicForLesson(lessonId)
        } else {
            findTopicForLesson(null)
        }
    }, [lessonId])
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findTopicForLesson(lessonId)
        } else {
            findTopicForLesson(null)
        }
    }, [lessonId])
    return (
    <div>
        <h3>Topics</h3>
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
        createTopic: (lessonId) => TopicActions.createTopic(dispatch, lessonId),
        deleteTopic: (item) => TopicActions.deleteTopic(dispatch, item),
        updateTopic: (topic) => TopicActions.updateTopic(dispatch, topic),
        findTopicForLesson: (lessonId) => TopicActions.findTopicForLesson(dispatch, lessonId)
    }
}

export default connect(stmp, dtpm)(TopicPill);