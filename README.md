# Task Buddy – React Task Manager

Your friendly task manager built with **React + Vite**. Tasks are saved in the browser's **localStorage**.

## Features
- Add tasks with a **priority** (High / Medium / Low) and **category** (General / Work / Personal)
- **Complete / Undo** toggle (button text changes with the task status) with strike-through on completed tasks
- **Delete** a single task, or **Clear All Tasks** (button only shows when at least one task exists)
- **Progress tracker**: "X out of Y tasks completed" plus a progress bar
- Data persists in localStorage (try refreshing the page)

## Components
`App` · `TaskForm` · `TaskList` · `ProgressTracker`

## Run locally
```
npm install
npm run dev
```

## Concepts practised
`useState`, `useEffect`, props, controlled inputs, `map` / `filter`, spread operator, conditional rendering, localStorage + `JSON.stringify` / `JSON.parse`
