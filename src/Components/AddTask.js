import React from 'react'

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (task.id) {
      const date = new Date()
      const updatedTaskList = taskList.map((todo) => (
        todo.id === task.id ?
          {
            id: task.id, name: task.name,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
          } : todo
      ))
      setTaskList(updatedTaskList)
      setTask({})
    } else {
      const date = new Date()
      const newTask = {
        id: date.getTime(),
        name: task.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, newTask])
      setTask({ id: null, name: '' })
      setTask({})

    }


  }
  return (
    <section className='addTask gradient-border'>
      <form onSubmit={ handleSubmit } >
        <input required type="text" name='task' value={ task.name || '' } autoComplete='off' placeholder='Add Task...' maxLength='25'
          onChange={ e => setTask({ ...task, name: e.target.value }) }
        />
        <button type='submit'>{task.id ? "Update" : 'Add'}</button>
      </form>
    </section>
  )
}
