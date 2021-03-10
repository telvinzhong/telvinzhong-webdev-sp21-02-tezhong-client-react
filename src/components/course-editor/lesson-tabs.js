import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"

const LessonTabs = (
    {
        lessons = [],
        createLesson,
        deleteLesson,
        updateLesson,
        findLessonsForModule
    }) => {
    const {courseId, moduleId, lessonId} = useParams()
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return (
    <div>
        <h1>Lessons</h1>
        <ul className="nav nav-pills">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <EditableItem
                                to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
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
        createLesson: (moduleId) => {
            lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
                .then(lesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson
                }))
        },
        deleteLesson: (item) => {
            lessonService.deleteLesson(item._id)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: item
                }))
        },
        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: "UPDATE_LESSON",
                    lesson
                }))
        },
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(lessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons
                }))
        }
    }
}

export default connect(stmp, dtpm)(LessonTabs);