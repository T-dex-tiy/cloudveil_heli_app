import React, { Component } from 'react';
import CalendarPicker from 'react-calendar';
import Reservation from './reservations'


class Calendar extends Component{
  constructor(props){
    super(props);
    this.state = {
      date:null,
    };
    this.newRes=this.newRes.bind(this)
  }
onChange(e) {
  const val = e;
  let newDate = val;
  newDate = val;
  console.log(val, newDate);
  console.log(this.state.date);
  // this.setState({ date: newDate })
}

newRes(event){
  const Res={
    opsArea:this.refs.opsArea.value,
    hangarPickup:this.refs.hangarPickup.value,
    guest:this.refs.guest.value,
  }
  console.log(Res);
}

  render(){
    console.log(this.props.users);

    return(
      <div className="selectionpage">
      <div className="selection">
        <select ref="opsArea">
          <option value=""disable selected>Choose Your Operating Area</option>
          <option value="North">North Operation Area</option>
          <option value="Central">Central Operation Area</option>
          <option value="South">South Operation Area</option>
        </select>
      </div>
      <div className="selection">
        <select ref="hangarPickup">
          <option value=""disable selected>Choose Your Pick Up Location</option>
          <option value="Heber">Heber Hanger</option>
          <option value="NSL">North Salt Lake Hanger</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="selection">
        <select ref="guest">
          <option value=""disable selected>Choose the amount of Guest</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <CalendarPicker
                onChange={this.onChange}
                value={this.state.date}
              />
      <div>
        <div><button onClick={this.newRes}>Lets Fly!</button></div>
          <Reservation/>
      </div>
      </div>
    )
  }
}
export default Calendar;
