import { useContext, useState } from 'react'
import { TodoDispatchContext } from "../context/Context";
import { v4 as uuidv4 } from 'uuid';

const InputTask = () => {

    const [inputValue, setInputValue] = useState('')

    const dispatch = useContext(TodoDispatchContext)



    return (
        <div className="InputTask">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
                placeholder="Add your todo..."


            />
            <button className="my-button" onClick={() => {
                setInputValue('')
                dispatch({

                    type: "ADD_TODO",
                    text: inputValue,
                    id: uuidv4(),
                    isDone: false

                })
            }}>ADD</button>
        </div>
    )
}

export default InputTask

let id = 2;