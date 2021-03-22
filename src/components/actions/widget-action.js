import widgetService from "../../services/widget-service";

export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"

export const createWidgetForTopic = (dispatch, topicId) => {
    const widget = {type: "HEADING", size: 1, text: "New Widget"}
    widgetService.createWidget(topicId, widget)
        .then(actualWidget => dispatch({
                type: CREATE_WIDGET,
                widget: actualWidget
            }
        ))
}

export const updateWidget = (dispatch, widgetId, widget) => {
    widgetService.updateWidget(widgetId, widget)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            widget,
            widgetId
        }))
}

export const deleteWidget = (dispatch, widgetId) => {
    widgetService.deleteWidget(widgetId)
        .then(status => dispatch({
            type: DELETE_WIDGET,
            widgetId
        }))
}

export const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: FIND_WIDGETS_FOR_TOPIC,
            widgets
        }))
}

const WidgetActions = {
    createWidgetForTopic,
    updateWidget,
    deleteWidget,
    findWidgetsForTopic
}

export default WidgetActions;