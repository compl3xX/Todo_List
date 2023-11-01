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
                    text: action.text,
                    isDone: action.isDone
                }
            ]

        case 'DEL_TODO':

            const delTodos = state.filter((s) => {
                return action.id !== s.id
            })

            return delTodos;

        case 'UPDATE_TODO':

            const updateTodos = state.map((todo) => {

                if (action.id === todo.id) {
                    return {
                        ...todo,
                        isDone: action.isDone !== undefined ? action.isDone : todo.isDone,
                        text: action.text !== undefined ? action.text : todo.text,
                        // Add more properties as needed
                    };
                } else {
                    return todo; // Return the original todo item if the ID doesn't match
                }
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