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

  componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))

  changeValue = (value) => {
      this.setState({
          courseTitle: value
      })
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
         return (
             <div>
                 <div className="top-cell">

                     <Route path="/courses/table">
                         <nav className="navbar navbar-expand-lg wbdv-sticky-nav-bar">
                             <div className="container-fluid">
                                 <div className="col-1">
                                     <i className="fas fa-bars fa-2x float-left btn"></i>
                                 </div>
                                 <div className="col-1">
                                     <a className="navbar-brand priority-3">Course Manager</a>
                                 </div>
                                 <div className="col-9">
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
                     <Route path="/courses/grid">
                         <nav className="navbar navbar-expand-lg wbdv-sticky-nav-bar">
                             <div className="container-fluid">
                                 <div className="col-1">
                                     <i className="fas fa-bars fa-2x float-left btn"></i>
                                 </div>
                                 <div className="col-1">
                                     <a className="navbar-brand priority-3">Course Manager</a>
                                 </div>
                                 <div className="col-9">
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
                         "/courses/editor/:courseId/",
                         "/courses/editor/:courseId/:moduleId",
                         "/courses/editor/:courseId/:moduleId/:lessonId",
                         "/courses/editor/:courseId/:moduleId/:lessonId/:topicId"]}
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