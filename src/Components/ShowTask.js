import React from 'react'

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleEdit = (id) => {
        const selectedTask = taskList.find(todo => todo.id === id);
        setTask(selectedTask)
    }
    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter(todo => todo.id !== id)
        setTaskList(updatedTaskList)
        setTask({})
    }
     const handleClearAll = () => {
        const shouldClearAll = window.confirm('Are you sure you want to clear all tasks?');
        if (shouldClearAll) {
            setTaskList([]);
        }
    };
    return (
        <section className='showTask'>
            <div className="head">
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>{ taskList.length }</span>
                    <button className='clearAll' 
                     onClick={handleClearAll}
                    >Clear All</button>
                </div>
            </div>
            <ul>
                { taskList.map((todo) => (
                    <li key={ todo.id }>
                        <p>
                            <span className='name'>{ todo.name }</span>
                            <span className='time'>{ todo.time }</span>
                        </p>
                        <i onClick={ () => handleEdit(todo.id) } className='bi bi-pencil-square'></i>
                        <i onClick={ () => handleDelete(todo.id) } className='bi bi-trash'></i>
                    </li>
                )) }



            </ul>
        </section>
    )
}
