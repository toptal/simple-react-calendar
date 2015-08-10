import React from 'react'

export default class DaysOfWeek extends React.Component {
  render() {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return (
      <div className='week is-weekday_header'>
        {daysOfWeek.map((day) => {
          return (
            <div className="day is-weekday_title">
              {day}
            </div>
          )
        })}
      </div>
    )
  }
}
