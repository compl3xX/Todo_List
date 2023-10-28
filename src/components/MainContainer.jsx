import React from 'react'
import './style.css'
import InputTask from "./InputTask"
import DisplayTask from "./DisplayTask"

const MainContainer = () => {
    return (
        <div className="container">
            <h3>Todo List</h3>
            <InputTask />
            <DisplayTask />
        </div>
    )
}

export default MainContainer