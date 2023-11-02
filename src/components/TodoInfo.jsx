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
            <>
                <span>Task Done :- {DoneTask}</span>
                <span> Total Tasks :- {todos.length}</span>
            </>
        </div>
    )
}

export default TodoInfo