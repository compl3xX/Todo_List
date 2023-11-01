import { useState, useContext } from 'react'
import { TodoContext, TodoFilterContext } from "../context/Context";

const FilterTask = () => {

    const todos = useContext(TodoContext);

    const { filter, setFilter } = useContext(TodoFilterContext)

    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    }



    return (
        <>
            <button onClick={toggleList}>Filter</button>
            {
                isOpen && (
                    <ul>
                        <li onClick={() => { setFilter('ALL') }}>All</li>
                        <button onClick={() => { setFilter('Completed') }}>Completed</button>
                        <li onClick={() => { setFilter('Incomplete') }}>Incomplete</li>
                    </ul>
                )
            }
        </>
    )
}

export default FilterTask