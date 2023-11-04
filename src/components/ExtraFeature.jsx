import { useContext } from 'react'

import { TodoDispatchContext } from "../context/Context"

function ExtraFeature() {

    const dispatch = useContext(TodoDispatchContext)

    const DeleteCompTask = () => {
        dispatch({
            type: 'DEL_TODO',
        })
    }

    const CompAllTask = () => {
        dispatch({
            type: 'UPDATE_TODO'
        })
    }

    return (
        <div className="extra-feature">
            <button onClick={CompAllTask}>Completed All Task </button>
            <button onClick={DeleteCompTask}>Delete Completed Task</button>
        </div>
    )
}

export default ExtraFeature