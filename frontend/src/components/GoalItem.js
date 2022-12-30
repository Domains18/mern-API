import React from 'react'

export default function GoalItem({goal}) {
  return (
    <div className='Goal'>
        <div>
            {new Date(goal.createdAt).toLocaleString('en-uk')}
        </div>
        <h2>{goal.text}</h2>
    </div>
  )
}
