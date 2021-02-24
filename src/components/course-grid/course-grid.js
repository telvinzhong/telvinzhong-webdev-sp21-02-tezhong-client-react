import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
    <div className = "container-fluid">
       <div className="navbar form-group row top-bar">
           <div className="col-5">Recent Documents</div>
           <div className="col-3">Owned by me
               <i className="fas fa-caret-down btn"></i>
           </div>
           <div className="col">
               <div className="float-right">
                   <i className="fas fa-2x fa-folder btn"></i>
                   <i className="fas fa-2x fa-sort-alpha-up btn"></i>
                   <Link to="/courses/table">
                       <i className="fas fa-2x fa-list btn"></i>
                   </Link>
               </div>
           </div>
       </div>

    <h2>Course Grid - {courses.length} Courses</h2>

    <div className="row">
    {
      courses.map(course =>
        <CourseCard
            course={course}
            title={course.title}
            updateCourse={updateCourse}
            deleteCourse={deleteCourse}
        />
      )
    }
    </div>
  </div>

export default CourseGrid
