import { useContext, useState } from 'react'
import { TodoDispatchContext } from "../context/context";
import { v4 as uuidv4 } from 'uuid';

const InputTask = () => {

    const [inputValue, setInputValue] = useState('')

    const dispatch = useContext(TodoDispatchContext)

    const inputStyle = {
        fontSize: '16px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
                placeholder="Add your todo..."
                style={inputStyle}
            />
            <button onClick={() => {
                setInputValue('')
                dispatch({

                    type: "ADD_TODO",
                    text: inputValue,
                    id: uuidv4()
                    
                })
            }}>ADD</button>
        </>
    )
}

export default InputTask

let id = 2;