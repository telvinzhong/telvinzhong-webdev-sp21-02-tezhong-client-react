import React from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from '../../reducers/modules-reducer'
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../../reducers/lesson-reducer";
import TopicPill from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer);

const CourseEditor = ({history}) => {
    const {layout} = useParams();
    return (
        <Provider store={store}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg">
                    <Link to={`/courses/${layout}`}>
                        <i className="fas fa-times fa-2x btn"></i>
                    </Link>

                    <h1>CS5610 Selected Course{layout}</h1>
                </nav>

                <div className="row bottom-part">
                    <div className="col-4 priority">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <TopicPill/>
                    </div>
                </div>

            </div>
        </Provider>
    )
}

export default CourseEditor