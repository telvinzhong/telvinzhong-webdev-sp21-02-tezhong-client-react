import lessonService from "../../services/lesson-service";

export const CREATE_LESSON = "CREATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE"

export const createLesson = (dispatch, moduleId) => {
    lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
        .then(lesson => dispatch({
            type: CREATE_LESSON,
            lesson
        }))
}
export const deleteLesson = (dispatch, item) => {
    lessonService.deleteLesson(item._id)
        .then(status => dispatch({
            type: DELETE_LESSON,
            lessonToDelete: item
        }))
}
export const updateLesson = (dispatch, lesson) => {
    lessonService.updateLesson(lesson._id, lesson)
        .then(status => dispatch({
            type: UPDATE_LESSON,
            lesson
        }))
}
export const findLessonsForModule = (dispatch, moduleId) => {
    lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: FIND_LESSONS_FOR_MODULE,
            lessons
        }))
}

const LessonActions = {
    createLesson,
    deleteLesson,
    updateLesson,
    findLessonsForModule
}

export default LessonActions;