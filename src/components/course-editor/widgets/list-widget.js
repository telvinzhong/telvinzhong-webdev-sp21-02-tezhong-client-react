import React, {useState} from 'react';

const ListWidget = (
    {
        widget,
        editing,
        updateWidget,
        deleteWidget,
        setWidget
    }) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    return (
        <div>
            {
                editing &&
                <>
           <select value={cachedWidget.type} className="form-control"
                            onChange={e => setCachedWidget({
                                ...cachedWidget,
                                type: e.target.value
                            })}>
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"VIDEO"}>Video</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LINK"}>Link</option>
                        <option value={"LIST"}>List</option>
                        <option value={"HTML"}>HTML</option>
                    </select>
                    <br/>
                    <input checked={cachedWidget.ordered} type="checkbox"
                           onChange={e => setCachedWidget({
                               ...cachedWidget,
                               ordered: !cachedWidget.ordered
                           })}
                           /> Ordered
                    <br/>
                    <textarea value={cachedWidget.text} rows={10} className="form-control"
                              onChange={e => setCachedWidget({
                                  ...cachedWidget,
                                  text: e.target.value
                              })}/>
                    <i onClick={() => deleteWidget(cachedWidget.id)}
                       className="fas fa-trash btn btn-sm float-right"/>
                    <i onClick={() => {
                        updateWidget(cachedWidget.id, cachedWidget)
                        setWidget({})
                    }}
                       className="fas fa-check btn btn-sm float-right"/>
                </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setWidget(cachedWidget)} className="fas fa-cog btn btn-sm float-right"/>
                    {
                        !cachedWidget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                    {
                        cachedWidget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }

                </>
            }
        </div>
    )
}

export default ListWidget;