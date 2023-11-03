import { useContext } from 'react'
import { TodoContext } from "../context/Context"
import FilterTask from "./FilterTask"

const TodoInfo = () => {



    const todos = useContext(TodoContext)

    const DoneTask = todos.reduce((acc, cur) => {
        return cur.isDone ? acc + 1 : acc;
    }, 0)




    return (
        <div className="Todo-info">
            <FilterTask />
          
            <div>Task Done :- {DoneTask}</div>
            <div> Total Tasks :- {todos.length}</div>

        </div>
    )
}

export default TodoInfo