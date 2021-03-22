import React, {useState} from 'react';

const HeadingWidget = (
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
                    <div>
                        <input value={cachedWidget.text} className="form-control"
                               onChange={e => setCachedWidget({
                                   ...cachedWidget,
                                   text: e.target.value
                               })}
                        />
                    </div>
                    <br/>
                    <select value={cachedWidget.size} className="form-control"
                            onChange={e => setCachedWidget({
                                ...cachedWidget,
                                size: e.target.value
                            })}>
                        <option value={1}>heading 1</option>
                        <option value={2}>heading 2</option>
                        <option value={3}>heading 3</option>
                        <option value={4}>heading 4</option>
                        <option value={5}>heading 5</option>
                        <option value={6}>heading 6</option>
                    </select>

                    <i onClick={() => deleteWidget(cachedWidget.id)}
                       className="fas fa-trash btn btn-sm float-right"/>
                    <i onClick={() => {
                        updateWidget(cachedWidget.id, cachedWidget)
                        setWidget({})
                    } }
                       className="fas fa-check btn btn-sm float-right"/>

                </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setWidget(cachedWidget)} className="fas fa-cog btn btn-sm float-right"/>
                    {(widget.size === 1 || widget.size === "1") && <h1>{widget.text}</h1>}
                    {(widget.size === 2 || widget.size === "2") && <h2>{widget.text}</h2>}
                    {(widget.size === 3 || widget.size === "3") && <h3>{widget.text}</h3>}
                    {(widget.size === 4 || widget.size === "4") && <h4>{widget.text}</h4>}
                    {(widget.size === 5 || widget.size === "5") && <h5>{widget.text}</h5>}
                    {(widget.size === 6 || widget.size === "6") && <h6>{widget.text}</h6>}

                </>
            }
        </div>
    )
}

export default HeadingWidget