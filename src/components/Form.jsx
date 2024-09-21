import React from 'react'

const Form = (HandleChange, addTask, tarea) => {
    return (
        <div>
            <form>
                <input type="text" value={tarea} placeholder='Write the activity' onChange={HandleChange} />
            </form>
        </div>
    )
}

export { Form }
