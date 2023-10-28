import { createContext, useReducer } from "react";

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
    { id: 0, text: 'Make WebApp' },
    { id: 1, text: 'Make Project List' }
]