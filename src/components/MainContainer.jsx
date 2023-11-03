import React from 'react'
import './style.css'
import InputTask from "./InputTask"
import DisplayTask from "./DisplayTask"
import TodoInfo from "./TodoInfo"
import ExtraFeature from "./ExtraFeature"

const MainContainer = () => {


    return (
        <div className="container">
            <h3>Todo List</h3>
            <InputTask />
            <ExtraFeature />
            <DisplayTask />
            <TodoInfo />

        </div>
    )
}

export default MainContainer