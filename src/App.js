import { Component } from 'react';

const DAYS = Object.freeze({
  MONDAY: 'Monday',
  TUESDAY: 'Tuesday',
  WEDNESDAY: 'Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Friday',
});

const TIMES_LIST = Object.freeze([
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
]);

class EventAdder extends Component {
  render() {
    return(
      <div className='event-adder-container'>
        <div className='event-adder'>
          <h3>Add event</h3>
          <h4>Name</h4>
          <h4>Day</h4>
          <h4>Time</h4>
          <button>Add Event</button>
        </div>
      </div>
    )
  }
}

class CalendarEntry extends Component {
  render() {
    return (
      <div className='entry'>
        <div>{this.props.day}</div>
        <div>{this.props.time}</div>
      </div>
    )
  }
}

class WeekCalendar extends Component {
  createDayLabel(dayName) {
    return <div className={`day-label ${dayName}`}>
      <h5>{dayName}</h5>
    </div>
  }

  createCalendarEntry(day, time) {
    return <CalendarEntry time={time} day={day} />
  }

  createTimeRow(time) {
    return <>
      <div className='time-row'>{time}</div>
      {Object.values(DAYS).map(day => (
        this.createCalendarEntry(day, time)
      ))}
    </>
  }

  render() {
    return (
      <div className='week-calendar-container'>
        <div className='week-calendar'>
          <div className='dummy-div'></div>
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

class App extends Component {
  render() {
    return <div>
      <WeekCalendar />
      <EventAdder />
    </div>
  }
}

export default App;
