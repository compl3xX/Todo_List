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
<<<<<<< HEAD
        <div>
            <button style={{ width: '7vw',backgroundColor: "rgb(186, 181, 181)" }} onClick={toggleList}>Filter</button>
=======
<<<<<<< Updated upstream
        <>
            <button onClick={toggleList}>Filter</button>
=======
        <div>
            <button style={{ width: '7vw',backgroundColor: "rgb(186, 181, 181)" }} onClick={toggleList}>Filter</button>
>>>>>>> Stashed changes
>>>>>>> baa51dec350fab02e007c06d2f8a2e339329618d
            {
                isOpen && (
                    <div className="drop-down">
                        <div>
                            <button onClick={() => { setFilter('ALL') }}>All</button>
                            <button onClick={() => { setFilter('Completed') }}>Completed</button>
                            <button onClick={() => { setFilter('Incomplete') }}>Incomplete</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default FilterTask