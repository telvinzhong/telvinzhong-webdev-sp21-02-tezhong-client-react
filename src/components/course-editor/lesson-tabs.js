import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import LessonActions from "../actions/lesson-actions";

const LessonTabs = (
    {
        lessons = [],
        createLesson,
        deleteLesson,
        updateLesson,
        findLessonsForModule,
        clearLessons
    }) => {
    const {courseId, moduleId, lessonId, layout} = useParams()
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        } else {
            findLessonsForModule(null)
        }
    }, [moduleId])
    return (
    <div>
        <h3>Lessons</h3>
        <ul className="nav nav-pills">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <EditableItem
                                to={`/courses/${layout}/editor/${courseId}/${moduleId}/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                item={lesson}
                                active={lesson._id === lessonId}
                            />
                        </a>
                    </li>
                )
            }
            <li className="nav-item">
                <i onClick={() => createLesson(moduleId)} className="nav-link fas fa-plus plus btn btn-sm" id="plus-topic"></i>
            </li>
        </ul>
    </div>)
}

const stmp = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => {
    return {
        createLesson: (moduleId) => LessonActions.createLesson(dispatch, moduleId),
        deleteLesson: (item) => LessonActions.deleteLesson(dispatch, item),
        updateLesson: (lesson) => LessonActions.updateLesson(dispatch, lesson),
        findLessonsForModule: (moduleId) => LessonActions.findLessonsForModule(dispatch, moduleId)
    }
}

export default connect(stmp, dtpm)(LessonTabs);