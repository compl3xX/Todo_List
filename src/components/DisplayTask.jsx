import { useContext } from 'react'
import { TodoContext } from "../context/context"
import { TodoDispatchContext } from "../context/context";


const DisplayTask = () => {

    const todos = useContext(TodoContext)

    const dispatch = useContext(TodoDispatchContext)


    const delHandler = (id) => {
        dispatch({
            type: "DEL_TODO",
            id: id
        })
    }

    const editHandler = (id) => {
        dispatch({
            type: "UPDATE_TODO",
            id: id
        })
    }


    return (
        <ul style={{ listStyle: "none" }}>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => editHandler(todo.id)}>Edit</button>
                        <button onClick={() => delHandler(todo.id)}>Del</button>
                    </li>
                )
            })}

        </ul>
    )
}

export default DisplayTask