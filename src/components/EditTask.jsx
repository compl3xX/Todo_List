import React, { useState, useContext } from 'react'
import { TodoDispatchContext } from "../context/Context";
import './style.scss'

const EditTask = ({ item }) => {


    const [isEditing, setIsEditing] = useState(false);

    const [text, setText] = useState(item.text);

    const dispatch = useContext(TodoDispatchContext)


    const delHandler = (id) => {
        dispatch({
            type: "DEL_TODO",
            id: id
        })
    }

    const startEditing = () => {
        setIsEditing(true)
    }

    const saveEdit = (id) => {
        setIsEditing(false)
        dispatch({

            type: "UPDATE_TODO",
            id: id,
            text: text

        })
    }

    const cancelEdit = () => {
        setIsEditing(false)
    }

    const taskDone = (id) => {

        dispatch({
            type: "UPDATE_TODO",
            id: id,
            isDone: !item.isDone
        })

    }


    return (

        <div className="list-items-item">
            {
                isEditing

                    ? (
                        <div className="list-items-item-Edit">

                            <input
                                type='text'
                                value={text}
                                onChange={(e) => { setText(e.target.value) }}
                            />
                            <div>
                                <button onClick={() => { saveEdit(item.id) }}>Save</button>
                                <button onClick={() => { cancelEdit(item.id) }}>Cancel</button>
                            </div>

                        </div>)
                    : (
                        <>
                            <input
                                type='checkbox'
                                checked={item.isDone}
                                onChange={() => { taskDone(item.id) }}
                            />
                            <span style={{textAlign:'center'}} className={item.isDone ? "strikethrough" : ""}>{item.text}</span>
                            <div>
                                <button onClick={startEditing}>Edit</button>
                                <button onClick={() => delHandler(item.id)}>Del</button>
                            </div>
                        </>
                    )
            }
        </div>

    )
}

export default EditTask