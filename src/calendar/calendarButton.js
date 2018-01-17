import React, { Component } from 'react';
import CalendarPicker from 'react-calendar';
import Calendar from './datePicker';

class CalendarButton extends Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
      <CalendarPicker
                // onChange={this.onChange}
                // value={this.state.date}
              />
      </div>
    )
  }
}

export default CalendarButton
