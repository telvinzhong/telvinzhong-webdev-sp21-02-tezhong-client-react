const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001046097/courses";

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

export const findCourseByID = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`)
        .then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const updateCourse = (courseId, course) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const api = {
    findAllCourses,
    createCourse,
    deleteCourse,
    updateCourse,
    findCourseByID
}

export default api