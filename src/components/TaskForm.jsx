import { useState } from 'react'

function TaskForm({ addTask }) {
  const [task, setTask] = useState('')
  const [priority, setPriority] = useState('medium')
  const [category, setCategory] = useState('General')

  const handleSubmit = (e) => {
    e.preventDefault() // stop the page from refreshing
    if (task.trim() === '') return

    addTask({
      text: task,
      priority,
      category,
      completed: false,
    })

    // reset the form to default values
    setTask('')
    setPriority('medium')
    setCategory('General')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div>
        <input
          id="input"
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <span>
          <button type="submit">Add Task</button>
        </span>
      </div>

      <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High Priority Task</option>
          <option value="medium">Medium Priority Task</option>
          <option value="low">Low Priority Task</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  )
}

export default TaskForm
