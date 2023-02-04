import React, { Component } from 'react';
import { EventAdder } from './EventAdder';
import { WeekCalendar } from './Calendar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    }
  }

  addEvent(newEvent) {
    this.setState({
      events: [...this.state.events, newEvent],
    })
  }

  render() {
    return <div className='app-container'>
      <WeekCalendar events={this.state.events}/>
      <EventAdder onAddEvent={(event) => this.addEvent(event)}/>
    </div>
  }
}

export default App;
