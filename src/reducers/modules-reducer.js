const initialState = {
    modules: []
}


const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }

        case "CREATE_MODULE":
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.module
                ]
            }

        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module => {
                    if (module._id === action.moduleToDelete._id) {
                        return false;
                    } else {
                        return true;
                    }
                })
            }

        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(module => {
                    if (module._id === action.moduleToUpdate._id) {
                        return action.moduleToUpdate
                    } else {
                        return module
                    }
                })
            }
        case "FIND_MODULE":
            return state
        default:
            return state

    }
}

export default moduleReducer