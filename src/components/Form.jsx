import React from 'react'

const Form = (HandleChange, addTask, tarea) => {
    return (
        <div>
            <form onSubmit={addTask}>
                <input type="text" value={tarea} placeholder='Write the activity' onChange={HandleChange} />
                <button type='submit'> Send </button>
            </form>
        </div >
    )
}

export { Form }
