import { Component, Fragment } from "react"
import { DAYS, TIMES_LIST } from "./structs"

class CalendarEntry extends Component {
  render() {
    if (this.props.events.length) {
      console.log(this.props.day, this.props.time, this.props.events)
    }
    return (
      <div className='entry'>
        <div>{this.props.day}</div>
        <div>{this.props.time}</div>
      </div>
    )
  }
}

export class WeekCalendar extends Component {
  createDayLabel(dayName) {
    return <div key={`day-label ${dayName}`} className={`day-label ${dayName}`}>
      <h5>{dayName}</h5>
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
      <div className='time-row' key={`time-label ${time}`}>{time}</div>
      {Object.values(DAYS).map(day => (
          this.createCalendarEntry(day, time)
      ))}
    </Fragment>
  }

  render() {
    return (
      <div className='week-calendar-container'>
          <div className='week-calendar'>
          <div className='dummy-div' key='placeholder-date'></div>
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