import React, {useState} from 'react';
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item= {title: "Some Title", _id:"ABC"},
        deleteItem,
        updateItem,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active? 'active' : ''}`} to={to}>
                        {item.title}
                        <i onClick={() => setEditing(true)} className="fas fa-edit btn btn-sm float-right"></i>
                    </Link>

                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(event) =>
                            setCachedItem({
                                ...cachedItem,
                                title: event.target.value
                            })}
                        value={cachedItem.title}
                    />

                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check btn btn-sm float-right"></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(item)
                    }} className="fas fa-times btn btn-sm float-right"></i>
                </>
            }

        </>
    )
}

export default EditableItem;