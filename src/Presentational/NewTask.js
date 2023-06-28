import React from "react";

const NewTask = ({newTask, handleChange, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input 
                name='title'
                placeholder="New task"
                value={newTask.title || ""}
                onChange={handleChange}
            />
            {!newTask.title ? null : (
                <>
                    <textarea 
                        name='description'
                        placeholder="Details..."
                        value={newTask.description || ""}
                        onChange={handleChange}
                    />
                    <button type="submit">Add Task</button>
                </>
            )}
        </form>
    );
}

export default NewTask;