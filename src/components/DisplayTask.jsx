import { useContext, useState } from 'react'
import { TodoContext } from "../context/context"
import { TodoDispatchContext } from "../context/context";
import EditTask from "./EditTask";


const DisplayTask = () => {

    const todos = useContext(TodoContext)

    const [editing, setEditing] = useState(false)

    const dispatch = useContext(TodoDispatchContext)


    const delHandler = (id) => {
        dispatch({
            type: "DEL_TODO",
            id: id
        })
    }

    const startEditing = (item) => {

        item.isEditing = true;

        setEditing(true)


        // dispatch({
        //     type: "UPDATE_TODO",
        //     id: id
        // })

    }




    return (
        <ul style={{ listStyle: "none" }}>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        <EditTask item={todo} />
                        <button onClick={() => delHandler(todo.id)}>Del</button>
                    </li>
                )
            })}

        </ul>
    )
}

export default DisplayTask