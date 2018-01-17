import React, { Component } from 'react';
import CalendarPicker from 'react-calendar'

class Calendar extends Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
    };
  }
onChange(e) {
  let newDate = val;
  const val = e;
  newDate = val;
  console.log(val);

  // this.setState({ date: newDate })
}

  render(){
    return(
      <div>
      <CalendarPicker
                onChange={this.onChange}
                value={this.state.date}
              />
      </div>
    )
  }
}
export default Calendar;
