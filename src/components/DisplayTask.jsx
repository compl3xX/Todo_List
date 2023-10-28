import { useContext } from 'react'
import { TodoContext } from "../context/context"


const DisplayTask = () => {

    const todos = useContext(TodoContext)


    return (
        <ul style={{ listStyle:"none"}}>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        {todo.text}
                    </li>
                )
            })}
        </ul>
    )
}

export default DisplayTask