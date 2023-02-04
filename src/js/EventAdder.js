import { Component } from "react";
import { TIMES_LIST, DAYS } from "./structs";

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
