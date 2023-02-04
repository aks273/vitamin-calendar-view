import { Component, Fragment } from 'react'
import { DAYS, TIMES_LIST } from './structs'

class CalendarEvent extends Component {
  render() {
    return <div className='event'>
      <div className='event-label'>{this.props.name}</div>
    </div>
  }
}

class CalendarEntry extends Component {
  render() {
    return (
      <div className='entry'>
        {this.props.events.map(e => (
          <CalendarEvent name={e.name} />
        ))}
      </div>
    )
  }
}

export class WeekCalendar extends Component {
  createDayLabel(dayName) {
    return <div key={`day-label-container ${dayName}`} className={`day-label-container ${dayName}`}>
      <div className='day-label'>{dayName}</div>
    </div>
  }

  createCalendarEntry(day, time) {
    return <CalendarEntry
      time={time}
      day={day}
      key={`${time} ${day}`}
      events={this.props.events.filter(e => e.day === day && e.time === time)}
    />
  }

  createTimeRow(time) {
    return <Fragment key={`row ${time}`}>
      <div className='time-label' key={`time-label ${time}`}>{time}</div>
      {Object.values(DAYS).map(day => (
        this.createCalendarEntry(day, time)
      ))}
    </Fragment>
  }

  render() {
    return (
      <div className='week-calendar-container'>
        <div className='week-calendar'>
          <div className='placeholder-date' key='placeholder-date'></div>
          {Object.values(DAYS).map(day => (
            this.createDayLabel(day)
          ))}
          {TIMES_LIST.map(time => (
            this.createTimeRow(time)
          ))}
        </div>
      </div>
    )
  }
}