import React from 'react'

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default class DaysOfWeek extends React.Component {
  render() {
    return (
      <div className='week is-weekday_header'>
        {daysOfWeek.map((day) => {
          return (
            <div className='day is-weekday_title' key={day}>
              {day}
            </div>
          )
        })}
      </div>
    )
  }
}
