import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'
import './style.css'

function App() {
  // Load saved tasks from localStorage on first render
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('tasks')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Save tasks to localStorage whenever they change
  // (localStorage stores strings only, so convert array -> string)
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Add a new task (copy existing array + new task)
  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  // Replace the task at the given index with the updated one
  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks]
    newTasks[index] = updatedTask
    setTasks(newTasks)
  }

  // Keep every task except the one at the given index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const clearTasks = () => {
    setTasks([])
  }

  return (
    <div className="app">
      <header>
        <h1 className="title">Task Buddy</h1>
        <p className="tagline">Your friendly task manager</p>
      </header>

      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  )
}

export default App
