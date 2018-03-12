import React, { Component } from 'react';
import CalendarPicker from 'react-calendar'

class Calendar extends Component{
  constructor(props){
    super(props);
    this.state = {
      date:null,
    };
  }
onChange(e) {
  let newDate = val;
  const val = e;
  newDate = val;
  console.log(val, newDate);
  console.log(this.state.date);
  // this.setState({ date: newDate })
}

  render(){
    console.log(this.props.users);
    return(
      <div>
      <h1>{this.state.date}</h1>
      <CalendarPicker
                onChange={this.onChange}
                value={this.state.date}
              />
      </div>
    )
  }
}
export default Calendar;
