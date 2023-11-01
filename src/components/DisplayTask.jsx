import { useContext} from 'react'
import { TodoContext } from "../context/Context"
import EditTask from "./EditTask";


const DisplayTask = () => {

    const todos = useContext(TodoContext)

    return (
        <ul style={{ listStyle: "none" }}>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        <EditTask item={todo} />
                    </li>
                )
            })}

        </ul>
    )
}

export default DisplayTask