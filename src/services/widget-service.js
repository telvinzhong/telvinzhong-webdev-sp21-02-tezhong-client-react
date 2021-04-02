//const API_URL = "https://tezhong-5610-two.herokuapp.com/api";
const API_URL = "http://localhost:8080/api";
// Just for this assignment because no heroku server for database

export const findAllWidgets = () =>
    fetch(`${API_URL}/widgets`)
        .then(response => response.json())


export const findWidgetsForTopic = (topicId) =>
    fetch(`${API_URL}/topics/${topicId}/widgets`)
        .then(response => response.json())


export const createWidget = (topicId, widget) =>
    fetch(`${API_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export const updateWidget = (widgetId, widget) =>
    fetch(`${API_URL}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export const deleteWidget = (widgetId) =>
    fetch(`${API_URL}/widgets/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())


export default {
    findAllWidgets,
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget
}