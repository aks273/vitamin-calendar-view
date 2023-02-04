import React, { Component } from 'react';

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
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      day: DAYS.MONDAY,
      time: TIMES_LIST[0],
    }
  }
  onClickAddEvent() {
    // check state for appropriate fields
    this.props.onAddEvent(this.state);
  }

  onChangeEventName(e) {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  }

  onChangeEventDay(e) {
    this.setState({
      ...this.state,
      day: e.target.value,
    })
  }

  onChangeEventTime(e) {
    this.setState({
      ...this.state,
      time: e.target.value,
    })
  }

  render() {
    console.log(this.state);

    return(
      <div className='event-adder-container'>
        <div className='event-adder'>
          <h3>Add event</h3>

          <h4>Name</h4>
          <input value={this.state.name} onChange={e => this.onChangeEventName(e)}></input>

          <h4>Day</h4>
          <select defaultValue={this.state.day} onChange={e => this.onChangeEventDay(e)}>
            {Object.values(DAYS).map(day => (
              <option value={day} key={day}>{day}</option>
            ))}
          </select>

          <h4>Time</h4>
          <select defaultValue={this.state.time} onChange={e => this.onChangeEventTime(e)}>
            {TIMES_LIST.map(time => (
              <option value={time} key={time}>{time}</option>
            ))}
          </select>

          <button onClick={() => this.onClickAddEvent()}>Add Event</button>
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
    return <div key={`day-label ${dayName}`} className={`day-label ${dayName}`}>
      <h5>{dayName}</h5>
    </div>
  }

  createCalendarEntry(day, time) {
    return <CalendarEntry time={time} day={day} key={`${time} ${day}`} />
  }

  createTimeRow(time) {
    return <React.Fragment key={`row ${time}`}>
      <div className='time-row' key={`time-label ${time}`}>{time}</div>
      {Object.values(DAYS).map(day => (
        this.createCalendarEntry(day, time)
      ))}
    </React.Fragment>
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    }
  }

  addEvent(newEvent) {
    this.setState(prevState => ({
      events: [...prevState.events, newEvent],
    }))
  }

  render() {
    console.log(this.state);
    return <div>
      <WeekCalendar />
      <EventAdder onAddEvent={(event) => this.addEvent(event)}/>
    </div>
  }
}

export default App;
