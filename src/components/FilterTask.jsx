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
                        <button onClick={() => { setFilter('ALL') }}>All</button>
                        <button onClick={() => { setFilter('Completed') }}>Completed</button>
                        <button onClick={() => { setFilter('Incomplete') }}>Incomplete</button>
                    </ul>
                )
            }
        </>
    )
}

export default FilterTask