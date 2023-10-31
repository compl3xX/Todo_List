import React, { useState } from 'react'

const EditTask = ({ item }) => {

    console.log(item)

    const [isEditing, setIsEditing] = useState(false);

    const [text, setText] = useState(item.text);

    const startEditing = () => {
        setIsEditing(true)
    }


    return (

        <>
            {
                isEditing

                    ? (<>
                        <input
                            type='text'
                            value={text}
                            onChange={(e) => { setText(e.target.value) }} />
                        <button>Save</button>
                        <button>Cancel</button>
                    </>)
                    : (
                        <>
                            {item.text}
                            <button onClick={startEditing}>Edit</button>
                        </>
                    )
            }
        </>

    )
}

export default EditTask