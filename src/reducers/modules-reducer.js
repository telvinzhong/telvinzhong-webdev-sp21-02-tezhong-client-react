import {FIND_MODULES_FOR_COURSE, CREATE_MODULE, DELETE_MODULE, UPDATE_MODULE} from "../actions/module-actions";

const initialState = {
    modules: []
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MODULE:
            const newState = {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
            return newState

        case FIND_MODULES_FOR_COURSE:
            return {
                ...state,
                modules: action.modules
            }

        case DELETE_MODULE:
            const newState = {
                modules: state.modules.filter(module => module._id !== action.moduleToDelete._id
                )
            }
            return newState

        case UPDATE_MODULE:
            return {
                ...state,
                modules: state.modules.map(m => {
                    if(m._id === action.updateModule._id) {
                        return action.updateModule
                    } else {
                        return m
                    }
                })
            }

        default:
            return state
    }
}

export default moduleReducer;



