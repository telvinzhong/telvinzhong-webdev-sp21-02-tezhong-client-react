import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom"
import moduleService from "../../services/module-service"

const ModuleList = (
    {
        myModules = [],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return (
        <div>
            <h2>Modules</h2>
            <ul className="list-group">
                {
                    myModules.map(module =>
                        <li className={`list-group-item ${module._id === moduleId? 'active' : ''} list-group-item-action list-group-item-light`}>
                            {/*<a href="#">{module.title}</a>*/}
                            <EditableItem
                                to={`/courses/editor/${courseId}/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                // active={module._id === moduleId}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x btn"></i>
                </li>
            </ul>
        </div>
    )
}

//read data from reducer
const stpm = (state) =>{
    return {
        myModules: state.moduleReducer.modules
    }
}

//send data to the reducer
const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (item) => {
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                }))
        },
        updateModule: (module) => {
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type:"UPDATE_MODULE",
                    module: module
                }))
        },
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(theModule => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModule
                }))
        }
    }
}

export default connect(stpm, dtpm)(ModuleList);