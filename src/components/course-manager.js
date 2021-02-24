import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse, updateCourse} from "../services/course-service";
import "./styles.css";

class CourseManager extends React.Component {
  state = {
    courses: [],
    courseTitle: "New Course"
  }

  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
        .then(status => this.setState((prevState) => ({
          ...prevState,
          courses: prevState.courses.map(
              (c) => c._id === course._id ? course : c)
        })))
  }

  componentDidMount = () =>
    findAllCourses()
        .then(courses => this.setState({courses}))

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "New Owner",
      lastModified: "Never"
    }

    courseService.createCourse(newCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))

  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
        .then(status => {

          this.setState((prevState) => ({
              ...prevState,
              courses: prevState.courses.filter
                (course => course !== courseToDelete)
          }))
        })
  }

  render() {
    return(
      <div className = "container-fluid">

          <div className="row">
              <div className="col-1">
                  <h3 className="title">
                      <i className="fas fa-bars"/>
                  </h3>
              </div>

              <div className="col-9">
                  <input className="form-control" placeholder="New Course Title"/>
              </div>

              <div className="col-2">
                  <button className="plus-button float-right" onClick={this.addCourse}>
                      <i className="fas fa-plus-circle fa-2x plus-icon"/>
                  </button>
              </div>

          </div>


        <Route path="/courses/table">
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
        <Route path="/courses/grid">
          <CourseGrid
              deleteCourse={this.deleteCourse}
              updateCourse={this.updateCourse}
              courses={this.state.courses}/>
        </Route>

          <Route path="/courses/editor"
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>

        <button className="plus-button float-right" onClick={this.addCourse}>
            <i className="fas fa-plus-circle fa-4x plus-icon"/>
        </button>
      </div>
    )

  }
}

export default CourseManager
