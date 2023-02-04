import { Component } from 'react';
import { TIMES_LIST, DAYS } from './structs';

export class EventAdder extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: '',
        day: DAYS.MONDAY,
        time: TIMES_LIST[0],
      }
    }
    onClickAddEvent() {
      if (this.state.name) {
        this.props.onAddEvent(this.state);
      }
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
            <div className='event-adder-title'>Add event</div>

            <div className='event-adder-label name'>Name</div>
            <input className='event-adder-field name' value={this.state.name} onChange={e => this.onChangeEventName(e)}></input>

            <div className='event-adder-label day'>Day</div>
            <select className='event-adder-field day' defaultValue={this.state.day} onChange={e => this.onChangeEventDay(e)}>
              {Object.values(DAYS).map(day => (
                <option value={day} key={day}>{day}</option>
              ))}
            </select>

            <div className='event-adder-label time'>Time</div>
            <select className='event-adder-field time' defaultValue={this.state.time} onChange={e => this.onChangeEventTime(e)}>
              {TIMES_LIST.map(time => (
                <option value={time} key={time}>{time}</option>
              ))}
            </select>

            <button className='event-adder-button' onClick={() => this.onClickAddEvent()}>Add</button>
          </div>
        </div>
      )
    }
  }
