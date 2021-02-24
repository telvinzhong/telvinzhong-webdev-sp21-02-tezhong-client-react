import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(

      <div>
       <div className="col">
           <div className="float-right">
               <i className="fas fa-2x fa-folder btn"></i>
               <i className="fas fa-2x fa-sort-alpha-up btn"></i>
               <Link to="/courses/grid">
                   <i className="fas fa-2x fa-list btn"></i>
               </Link>
           </div>
       </div>

        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Owned by</th>
                    <th>Last Modified</th>
                    <th></th>
                </tr>
            </thead>
          <tbody>

          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </tbody>
        </table>
      </div>
    )
  }
}
