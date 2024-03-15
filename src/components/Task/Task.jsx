import { useState } from 'react'
import './Task.css'

function dueDate(deadline) {
  let deadlineDestructured = deadline.split('/')
  let days = new Date(deadlineDestructured[2], deadlineDestructured[1] - 1, deadlineDestructured[0])
  let today = new Date()
  let difference = Math.floor((days - today) / (1000 * 60 * 60 * 24)) + 1
  let differenceText = difference === 1 ? 'día' : 'días'
  return { difference, differenceText }
}

export function Task(props) {
  const { title, deadline, completed } = props
  const [checked, setChecked] = useState(completed)
  let { difference, differenceText } = dueDate(deadline)
  let message = ''
  if (difference <= 0) {
    message = `Hoy es la fecha de entrega.`
    document.getElementById('messageDueDate').style.color = 'red'
  } else if (difference > 1) {
    message = `Faltan ${difference} ${differenceText}.`
    document.getElementById('messageDueDate').style.color = 'orange'
  } else if (difference > 3) {
    message = `Faltan ${difference} ${differenceText}.`
    document.getElementById('messageDueDate').style.color = 'green'
  }

  return (
    <div id='task-container'>
      <div id='info-container'>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <p className='task-title' style={{ textDecoration: checked ? 'line-through' : 'none' }}>{title}</p>
      </div>
      <div>
        <p id="messageDueDate">{message}</p>
        <p>{deadline}</p>
      </div>
    </div>
  )
}