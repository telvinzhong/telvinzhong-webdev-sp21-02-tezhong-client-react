import React from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from '../../reducers/modules-reducer'
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../../reducers/lesson-reducer";
import TopicPill from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer);

const CourseEditor = ({history}) =>
 <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg">
            <Link to="/courses/table">
                    <i onClick={() => history.goBack()} className="fas fa-times fa-2x btn"></i>
            </Link>

            <Link className="navbar-brand" style={{marginRight: "auto", marginLeft: "auto"}}
               to="/courses/editor">CS5610 Web Development</Link>
            <div className="col-9 collapse navbar-collapse" id="navbarNav">
                <ul className="nav nav-pills white">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Build</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <i className="fas fa-plus plus btn"></i>
                </form>
            </div>
        </nav>

        <div className="row bottom-part">
            <div className="col-3 bg-dark priority">
                <ul className="list-group space_list">
                    <li>
                        <a className="list-group-item list-group-item-action active" data-bs-toggle="list" href="#"
                           role="tab">Module 1 - jQuery
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item-action list-group-item-dark" data-bs-toggle="list"
                           href="#" role="tab">Module 2 - React
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item-action list-group-item-dark" data-bs-toggle="list"
                           href="#" role="tab">Module 3 - Redux
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item-action list-group-item-dark" data-bs-toggle="list"
                           href="#" role="tab">Module 4 - Native
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item-action list-group-item-dark" data-bs-toggle="list"
                           href="#" role="tab">Module 5 - Angular
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item-action list-group-item-dark" data-bs-toggle="list"
                           href="#" role="tab">Module 6 - Node
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item-action list-group-item-dark" data-bs-toggle="list"
                           href="#" role="tab">Module 7 - Mongo
                            <i className="fas fa-times float-right"></i>
                        </a>
                    </li>
                    <div>
                        <i className="fas fa-plus plus-in-list fa-2x btn"></i>
                    </div>
                </ul>
            </div>

            <div className="col-9">
                <ul className="nav nav-pills nav-cell">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item" id="topic">
                        <a className="nav-link " href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 4</a>
                    </li>
                    <li className="nav-item">
                        <i className="nav-link fas fa-plus plus btn btn-sm" id="plus-topic"></i>
                    </li>
                </ul>

                <div className="col-sm-12">
                    <div className="float-right" id="save-preview">
                        <button className="btn" id="save">Save</button>
                        <label style={{fontSize: "18px"}}><b>Preview</b></label>
                        <i className="fas fa-toggle-off fa-2x toggle btn btn-sm"></i>
                    </div>
                    <div className="div1">
                        <div className="col-sm-12 combo">
                            <p><b style={{fontSize: "25px"}}>Heading widget</b>
                                <i className="fas fa-times-square fa-3x cross"></i>
                                <select className="form-control wbdv-field wbdv-role"
                                        name="heading" id="heading">
                                    <option value="Heading" selected>Heading</option>
                                </select>
                                <i className="fas fa-arrow-square-up fa-3x arrow"></i>
                                <i className="fas fa-arrow-square-down fa-3x arrow"></i>
                            </p>
                        </div>
                        <div className="col-sm-12">
                            <input type="text" placeholder="Heading text" className="form-control" id="headingtext"
                                   name="headingtext"/>
                        </div>
                        <div className="col-sm-12">
                            <input type="text" placeholder="Heading 1" className="form-control" id="heading1"
                                   name="heading1"/>
                        </div>
                        <div className="col-sm-12">
                            <input type="text" placeholder="Widget name" className="form-control" id="widgetname"
                                   name="widgetname"/>
                        </div>
                        <div className="col-sm-12">
                            <p>Preview</p>
                            <h1>Heading text</h1>
                        </div>
                    </div>
                    <div className="float-right">
                        <i className="fas fa-plus-circle fa-3x btn" id="circle-icon"></i>
                    </div>
                </div>

            </div>
        </div>
    </div>

export default CourseEditor
