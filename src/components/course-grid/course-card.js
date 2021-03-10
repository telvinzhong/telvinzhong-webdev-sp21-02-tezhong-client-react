import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./../styles.css";

const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse,
        title
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    const courseDelete = () => {
        deleteCourse(course)
        setEditing(false)
    }

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="card">
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top"/>

                <div className="card-body">
                    {
                        !editing &&
                        <h5 className="card-title">{course.title}</h5>
                    }
                    {
                        editing &&
                        <input type="text"
                               onChange={(event) => setNewTitle(event.target.value)}
                               value={newTitle}
                               className="form-control"/>
                    }

                    <p className="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content
                    </p>
                    <div>
                        <Link to={`/courses/editor/${course._id}`} className="btn btn-primary">
                            {course.title}
                        </Link>
                    </div>
                    <div className="float-right card-icons">
                        {
                            editing &&
                            <i onClick={() => saveTitle()} className="fas fa-check btn btn-sm"></i>}
                        {
                            !editing &&
                            <i onClick={() => setEditing(true)} className="fas fa-edit btn btn-sm"></i>
                        }
                        {
                            editing &&
                            <i onClick={() => courseDelete()} className="fas fa-trash btn btn-sm"></i>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CourseCard