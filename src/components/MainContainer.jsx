import React from 'react'
import './style.scss'
import InputTask from "./InputTask"
import DisplayTask from "./DisplayTask"
import TodoInfo from "./TodoInfo"

const MainContainer = () => {


    return (
        <div className="container">
            <h3>Todo List</h3>
            <InputTask />
            <DisplayTask />
            <TodoInfo />
        </div>
    )
}

export default MainContainer