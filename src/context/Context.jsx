import { createContext, useReducer, useState } from "react";

import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

export const TodoDispatchContext = createContext();

export const TodoFilterContext = createContext();

export const ExtraFeatureContext = createContext();

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

                if (action.id) return action.id !== s.id

                else {
                    return !s.isDone;
                }
            })

            return delTodos;

        case 'UPDATE_TODO':

            const updateTodos = state.map((todo) => {
                if (action.id) {
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
                }
                else {

                    return {
                        ...todo,
                        isDone: true
                    }

                }
            })

            return updateTodos





    }

}




export const TodoProvider = ({ children }) => {

    const [todos, dispatch] = useReducer(todoReducer, initialTasks)

    const [filter, setFilter] = useState('All')

    const [delCompTodos, setdelCompTodos] = useState(false)

    console.log(filter)
    return (

        <TodoContext.Provider value={todos} >
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoFilterContext.Provider value={{ filter, setFilter }}>
                    <ExtraFeatureContext.Provider value={{ delCompTodos, setdelCompTodos }}>
                        {children}
                    </ExtraFeatureContext.Provider>
                </TodoFilterContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoContext.Provider >

    )


}


const initialTasks = [
    { id: uuidv4(), text: 'Make WebApp', isDone: true },
    { id: uuidv4(), text: 'Make Project List', isDone: false }
]

