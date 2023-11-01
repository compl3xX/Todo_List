import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

export const TodoDispatchContext = createContext();

const todoReducer = (state, action) => {

    console.log(action)

    switch (action.type) {

        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]

        case 'DEL_TODO':

            const delTodos = state.filter((s) => {
                return action.id !== s.id
            })

            return delTodos;

        case 'UPDATE_TODO':

            const updateTodos = state.map((s) => {

                if (action.id === s.id) {
                    s.text = action.text
                    //s.isDone = action?.isDone
                }

                return s
            })

            return updateTodos


    }

}


export const TodoProvider = ({ children }) => {

    const [todos, dispatch] = useReducer(todoReducer, initialTasks)

    return (

        <TodoContext.Provider value={todos} >
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider >

    )


}


const initialTasks = [
    { id: uuidv4(), text: 'Make WebApp', isDone: true },
    { id: uuidv4(), text: 'Make Project List', isDone: false }
]