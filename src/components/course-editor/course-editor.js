import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from '../../reducers/modules-reducers'
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../../reducers/lesson-reducer";
import TopicPill from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";
import courseService from "../../services/course-service";
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})


const store = createStore(reducer);

const CourseEditor = ({history}) => {
    const {courseId, layout} = useParams();
    const [title, setNewTitle] = useState('')
    useEffect(() => {
        courseService.findCourseById(courseId)
            .then(course => setNewTitle(course.title))
    }, [])
    return (
        <Provider store={store}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg">
                    <Link to={`/courses/${layout}`}>
                        <i className="fas fa-times fa-2x btn"></i>
                    </Link>

                    <h1>Web Dev Course Editor - {title}</h1>
                </nav>

                <div className="row bottom-part">
                    <div className="col-3 priority">
                        <ModuleList/>
                    </div>
                    <div className="col-9">
                        <LessonTabs/>
                        <TopicPill/>
                        <br/>
                        <WidgetList/>
                    </div>
                </div>

            </div>
        </Provider>
    )
}

export default CourseEditor