import React, { Component } from 'react';
import moment from 'moment';


class Calendar extends Component{
  constructor(props){
    super(props);
    this.width= props.width || '350px';
    this.style=props.style || {};
  }
  state={
    momentContext:moment(),
    today:moment(),
    showMonthPopUp: false,
    showYearPopup: false,

  }
  render(){
    return(
      <div className="calendar-container">
      <h1>Calendar Shit</h1>
      </div>
    )
  }
}

export default Calendar;
