function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter((t) => t.completed)
  const totalTasks = tasks.length

  const percentage =
    totalTasks === 0 ? 0 : (completedTasks.length / totalTasks) * 100

  return (
    <div className="progress-tracker">
      <p>
        {completedTasks.length} out of {totalTasks} tasks completed
      </p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressTracker
