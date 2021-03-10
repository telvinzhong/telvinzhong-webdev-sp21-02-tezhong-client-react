import React from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";

const TopicPill = (
    {
        topics = [],
        createTopic,
        deleteTopic,
        updateTopic
    }) => {
    const {courseId, moduleId, lessonId, topicId} = useParams()
    return (
    <div>
        <h2>Topics</h2>
        <ul className="nav nav-pills nav-cell">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                            <EditableItem
                                to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                item={topic}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}
                            />
                        </a>
                    </li>
                )
            }
            <li className="nav-item">
                <i onClick={createTopic} className="nav-link fas fa-plus plus btn btn-sm" id="plus-topic"></i>
            </li>

        </ul>
    </div>)
}

const stmp = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => {
    return {
        createTopic: () => dispatch({type: "CREATE_TOPIC"}),
        deleteTopic: (item) => dispatch({
            type: "DELETE_TOPIC",
            item
        }),
        updateTopic: (topic) => dispatch({
            type: "UPDATE_TOPIC",
            topic
        })
    }
}

export default connect(stmp, dtpm)(TopicPill);