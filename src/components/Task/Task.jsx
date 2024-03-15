import React from 'react'
import './Task.css'

function dueDate(deadline) {
  let deadlineDestructured = deadline.split('/')
  let days = new Date(deadlineDestructured[2], deadlineDestructured[1] - 1, deadlineDestructured[0])
  let today = new Date()
  let difference = Math.floor((days - today) / (1000 * 60 * 60 * 24)) + 1
  return difference
}

export function Task({ id, title, deadline, completed, handleCompleted }) {
  let difference = dueDate(deadline)

  console.log(completed)
  return (
    <div id='task-container'>
      <div id='info-container'>
        <input type="checkbox" checked={completed} onChange={() => handleCompleted(id)} />
        <p className='task-title' style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</p>
      </div>
      <div>
        <p style={{ color: difference <= 0 ? 'red' : difference <= 2 ? 'orange' : 'green', textDecoration: completed ? 'line-through' : 'none' }} className='deadline'>{deadline}</p>
      </div>
    </div>
  )
}