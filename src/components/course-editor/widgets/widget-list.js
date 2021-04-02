import React, {useState, useEffect} from 'react';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../../services/widget-service";
import {connect} from "react-redux";
import WidgetActions from "../../actions/widget-actions";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets = [],
        createWidgetForTopic,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
    }
    ) => {
    const [editingWidget, setEditingWidget] = useState({});
    const {topicId} = useParams()
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])
    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right btn btn-sm"/>
            <h2>Widget List</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    setWidget={setEditingWidget}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setEditingWidget}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    setWidget={setEditingWidget}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    setWidget={setEditingWidget}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        createWidgetForTopic: (topicId) => WidgetActions.createWidgetForTopic(dispatch, topicId),
        updateWidget: (widgetId, widget) => WidgetActions.updateWidget(dispatch, widgetId, widget),
        deleteWidget: (widgetId) => WidgetActions.deleteWidget(dispatch, widgetId),
        findWidgetsForTopic: (topicId) => WidgetActions.findWidgetsForTopic(dispatch, topicId)
    }
}

export default connect(stpm, dtpm)(WidgetList);