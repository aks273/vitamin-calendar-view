import { Component, Fragment } from 'react';
import { TIMES_LIST, DAYS } from './structs';

class EventSelectField extends Component {
    render() {
        return (
            <Fragment>
                <div className={`event-adder-label ${this.props.title}`}>
                    {this.props.displayTitle}
                </div>
                <select
                    className={`event-adder-field ${this.props.title}`}
                    defaultValue={this.props.value}
                    onChange={e => this.props.onChange(e, this.props.title)}
                >
                    {this.props.options.map(option => (
                        <option value={option} key={option}>{option}</option>
                    ))}
                </select>
            </Fragment>
        )
    }
}

class EventInputField extends Component {
    render() {
        return (
            <Fragment>
                <div className={`event-adder-label ${this.props.title}`}>
                    {this.props.displayTitle}
                </div>
                <input
                    className={`event-adder-field ${this.props.title}`}
                    value={this.props.value}
                    onChange={e => this.props.onChange(e, this.props.title)}
                >
                </input>
            </Fragment>
        )
    }
}

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

    onChangeField(e, name) {
        const newState = { ...this.state };
        newState[name] = e.target.value;
        this.setState(newState)
    }

    render() {
      return(
        <div className='event-adder-container'>
          <div className='event-adder'>
            <div className='event-adder-title'>Add event</div>

            <EventInputField
                title='name'
                displayTitle='Name'
                onChange={(e, title) => this.onChangeField(e, title)}
                value={this.state.name}
            />
            <EventSelectField
                title='day'
                displayTitle='Day'
                options={Object.values(DAYS)}
                onChange={(e, title) => this.onChangeField(e, title)}
                value={this.state.day}
            />
            <EventSelectField
                title='time'
                displayTitle='Time'
                options={TIMES_LIST}
                onChange={(e, title) => this.onChangeField(e, title)}
                value={this.state.time}
            />

            <button className='event-adder-button' onClick={() => this.onClickAddEvent()}>Add</button>
          </div>
        </div>
      )
    }
  }
