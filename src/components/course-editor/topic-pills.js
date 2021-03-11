import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"

const TopicPills = ({
                        topics = [],
                        createTopic,
                        findTopicsForLesson,
                        updateTopic,
                        deleteTopic
                    }) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [lessonId])

    return (
        <div>
            <ul className="nav nav-pills ss-topics-nav">
                {
                    topics.map(topic =>
                        <li className="nav-item ss-topics-nav-item"
                            key={topic._id}>
                            <EditableItem
                                key={topic._id}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                active={topic._id === topicId}/>
                        </li>
                    )
                }

                {
                    lessonId !== undefined &&
                    <li className="nav-item ss-topics-nav-item">
                        <a className="nav-link ss-link" href="#" tabIndex="-1">
                            <i onClick={() => createTopic(lessonId)}
                               className="fas fa-plus fa-lg ss-plus-icon"/>
                        </a>
                    </li>
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: 'New Topic'})
                .then(theActualTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: theActualTopic
                }))
        },
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(theTopics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics: theTopics
                }))
        },
        updateTopic: (item) => {
            topicService.updateTopic(item._id, item)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topicToUpdate: item
                }))
        },
        deleteTopic: (item) => {
            topicService.deleteTopic(item._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete: item
                }))
        }
    }
}

export default connect(stpm, dtpm)(TopicPills)