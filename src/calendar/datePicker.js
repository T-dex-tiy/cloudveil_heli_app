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
      <div className="selectionpage">
      <div className="selection">
      <nav id="main">
        <ul>
          <li>Operating Area</li>
          <ul className="drop-menu menu-1">
              <li>North Operation Area</li>
              <li>Central Operation Area</li>
              <li>South Operation Area</li>
          </ul>
        </ul>
        <ul>
          <li>Pickup Location</li>
          <ul className="drop-menu menu-1">
              <li>Heber Hanger</li>
              <li>North Salt Lake Hanger</li>
              <li>Other</li>
          </ul>
        </ul>
        <ul>
          <li>Pickup Time</li>
          <ul className="drop-menu menu-1">
              <li>AM Slot</li>
              <li>PM Slot</li>
          </ul>
        </ul>
        <ul className="operatingArea">
          <li className="options">Group Size</li>
          <ul className="pickupArea menu-1">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
        </ul>
      </nav>
      </div>
      <CalendarPicker
                onChange={this.onChange}
                value={this.state.date}
              />
      </div>
    )
  }
}
export default Calendar;
