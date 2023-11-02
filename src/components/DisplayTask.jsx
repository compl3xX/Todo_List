import { useContext } from 'react'
import { TodoContext, TodoFilterContext } from "../context/Context"
import EditTask from "./EditTask";


const DisplayTask = () => {

    const todos = useContext(TodoContext)

    const { filter, setFilter } = useContext(TodoFilterContext)


    const filteredTodos = todos.filter((task) => {
        if (filter === 'Completed') {
            return task.isDone;
        } else if (filter === 'Incomplete') {
            return !task.isDone;
        }
        return true;
    });



    return (
        <ul style={{ listStyle: "none" }} >
            {filteredTodos.map((todo) => {
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

