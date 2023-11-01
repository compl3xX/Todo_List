import React, { useState, useContext } from 'react'
import { TodoDispatchContext } from "../context/context";
import './style.css'

const EditTask = ({ item }) => {

  //  const [isDone, setIsDone] = useState(false);

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

    // const taskDone = (id) => {
    //    // setIsDone(true);
    //     dispatch({
    //         type: "UPDATE_TODO",
    //         id: id,
    //         isDone: !item.isDone
    //     })

    // }


    return (

        <>
            {
                isEditing

                    ? (<>
                        <input
                            type='text'
                            value={text}
                            onChange={(e) => { setText(e.target.value) }} />
                        <button onClick={() => { saveEdit(item.id) }}>Save</button>
                        <button onClick={() => { cancelEdit(item.id) }}>Cancel</button>

                    </>)
                    : (
                        <>
                            {/* <input
                                type='checkbox'
                                checked={item.isDone}
                                onChange={taskDone}
                            /> */}
                            <span className={item.isDone ? "strikethrough" : ""}>{item.text}</span>
                            <button onClick={startEditing}>Edit</button>
                            <button onClick={() => delHandler(item.id)}>Del</button>
                        </>
                    )
            }
        </>

    )
}

export default EditTask