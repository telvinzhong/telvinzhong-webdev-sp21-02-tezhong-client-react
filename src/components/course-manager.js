import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService from "../services/course-service";

class CourseManager extends React.Component {
    state = {
        courses: [],
        courseTitle: ''
    }

    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))

    findCourseById = (id) => {
        courseService.findCourseById(id)
            .then(course =>
                this.state.courses.find(course => course._id === id)
            )
    }

    addCourse = () => {
        const newCourse = {
            title: this.state.courseTitle,
            owner: "Professor",
            lastModify: "1/1/2021"
        }

        courseService.createCourse(newCourse)
            .then(actualCourse => {
            this.state.courses.push(actualCourse)
            this.setState(this.state)
        })

        this.setState({
            courseTitle: ''
        })
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses =
                        prevState.courses.filter(course => course._id !== courseToDelete._id)
                    return nextState
                })
            })
    }

    updateCourse = (courseToUpdate) => {
        courseService.updateCourse(courseToUpdate._id, courseToUpdate)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(course =>
                    course._id === courseToUpdate._id ? courseToUpdate : course)
            })))
    }

    changeValue = (value) => {
        this.setState({
            courseTitle: value
        })
    }


    render() {
        return (
            <div>
                <div className="top-cell">
                    <Route path="/courses/table" exact={true}>
                        <nav className="navbar navbar-expand-lg wbdv-sticky-nav-bar">
                            <div className="container-fluid">
                                <div className="col-1">
                                    <i className="fas fa-bars fa-2x float-left btn"></i>
                                </div>
                                <div className="col-2">
                                    <a className="navbar-brand priority-3">Course Manager</a>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" type="search" placeholder="New Course Title"
                                           aria-label="Search" id="new-course-title"
                                           value={this.state.courseTitle}
                                           onChange={e => this.changeValue(e.target.value)}

                                    />
                                </div>
                                <div onClick={this.addCourse}
                                     className="col-1">
                                    <i className="fas fa-plus-circle fa-2x btn" id="plus-circle"></i>
                                </div>
                            </div>
                        </nav>

                        <CourseTable
                            deleteCourse={this.deleteCourse}
                            updateCourse={this.updateCourse}
                            courses={this.state.courses}/>

                        <div onClick={this.addCourse} className="sticky-icon float-right">
                            <i className="btn fas fa-plus-circle fa-4x" id="bottom-plus-circle"></i>
                        </div>
                    </Route>
                    <Route path="/courses/grid" exact={true}>
                        <nav className="navbar navbar-expand-lg wbdv-sticky-nav-bar">
                            <div className="container-fluid">
                                <div className="col-1">
                                    <i className="fas fa-bars fa-2x float-left btn"></i>
                                </div>
                                <div className="col-2">
                                    <a className="navbar-brand priority-3">Course Manager</a>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" type="search" placeholder="New Course Title"
                                           aria-label="Search" id="new-course-title"
                                           value={this.state.courseTitle}
                                           onChange={e => this.changeValue(e.target.value)}
                                    />
                                </div>
                                <div onClick={this.addCourse}
                                     className="col-1">
                                    <i className="fas fa-plus-circle fa-2x btn" id="plus-circle"></i>
                                </div>
                            </div>
                        </nav>

                        <CourseGrid
                            deleteCourse={this.deleteCourse}
                            updateCourse={this.updateCourse}
                            courses={this.state.courses}/>

                        <div onClick={this.addCourse} className="sticky-icon float-right">
                            <i className="btn fas fa-plus-circle fa-4x" id="bottom-plus-circle"></i>
                        </div>
                    </Route>

                    <Route path={[
                        "/courses/:layout/editor/:courseId/",
                        "/courses/:layout/editor/:courseId/:moduleId",
                        "/courses/:layout/editor/:courseId/:moduleId/:lessonId",
                        "/courses/:layout/editor/:courseId/:moduleId/:lessonId/:topicId",
                        "/courses/:layout/editor/:courseId/:moduleId/:lessonId/:topicId/:widgetId"]}
                           exact={true}
                           render={(props) =>
                               <CourseEditor
                                   {...props}/>
                           }>
                    </Route>
                </div>
            </div>
        )
    }
}


export default CourseManager