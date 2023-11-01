<<<<<<< Updated upstream
import { useContext} from 'react'
import { TodoContext } from "../context/context"
=======
import { useContext } from 'react'
import { TodoContext, TodoFilterContext } from "../context/Context"
>>>>>>> Stashed changes
import EditTask from "./EditTask";


const DisplayTask = () => {

    const todos = useContext(TodoContext)

    const { filter, setFilter } = useContext(TodoFilterContext)


    // switch (filter) {

    //     case "Completed": {
    //         todos = todos.filter((todo) => {
    //             return todo.isDone
    //         })
    //         // console.log(todos)
    //     }

    //     case "Incomplete": {
    //         todos = todos.filter((todo) => {
    //             return !todo.isDone
    //         })
    //     }
    // }

    const filteredTodos = todos.filter((task) => {
        if (filter === 'Completed') {
            return task.isDone;
        } else if (filter === 'incomplete') {
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

