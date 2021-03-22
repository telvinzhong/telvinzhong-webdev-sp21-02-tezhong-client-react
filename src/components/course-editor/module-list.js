import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom"
import moduleService from "../../services/module-service"
import ModuleAction from "../actions/module-actions";

const ModuleList = (
    {
        myModules = [],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {courseId, moduleId, layout} = useParams();
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
                            <EditableItem
                                to={`/courses/${layout}/editor/${courseId}/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x btn float-right"></i>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) =>{
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => ModuleAction.createModule(dispatch, courseId),
        deleteModule: (item) => ModuleAction.deleteModule(dispatch, item),
        updateModule: (module) => ModuleAction.updateModule(dispatch, module),
        findModulesForCourse: (courseId) => ModuleAction.findModulesForCourse(dispatch, courseId)
    }
}

export default connect(stpm, dtpm)(ModuleList);