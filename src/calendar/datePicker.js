import React, { Component } from 'react';
import Reservation from './reservations';
import Calendar from './calendar'

const style={
  position:'relative',
  margin:'50px auto'
}

class ResPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      date:"",
    };
    this.newRes=this.newRes.bind(this)
    this.onChange=this.onChange.bind(this)
  }
onChange(event) {
  console.log(this, "On Change");
  console.log(this.getDate);;
  const val = event;
  let newDate = val;
  this.setState({date:newDate})
}

getDate(event){
  console.log(this.new);
}

newRes(event){
  var pickUpLocation=this.refs.hangarPickup.value;
  if(pickUpLocation=="Other"){
    let pickUpZone=prompt("Enter Location for Pick up");
    return pickUpZone
  }
  console.log(typeof(this.refs.hangarPickup.value));
  const Res={
    opsArea:this.refs.opsArea.value,
    hangarPickup:pickUpLocation,
    guest:this.refs.guest.value,
    day:this.state.date
  }
  console.log(Res.hangarPickup);
  this.props.newReservation(Res)
}

onClickYear(event){
  const val= event;
  console.log("Clicked Year: ", val)
}

  render(){
    console.log(this.props.users);
    console.log(this.props.reservations);
    let day="";
    console.log(day);
    return(
      <div className="selectionpage">
      <div className="selection">
        <select ref="opsArea">
          <option value=""disable="true" selected hidden>Choose Your Operating Area</option>
          <option value="North">North Operation Area</option>
          <option value="Central">Central Operation Area</option>
          <option value="South">South Operation Area</option>
        </select>
      </div>
      <div className="selection">
        <select ref="hangarPickup">
          <option value=""disable="true" selected hidden>Choose Your Pick Up Location</option>
          <option value="Heber">Heber Hanger</option>
          <option value="NSL">North Salt Lake Hanger</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="selection">
        <select ref="guest">
          <option  value=""disable="true" selected hidden>Choose the amount of Guest</option>
          <option  value="1">1</option>
          <option  value="2">2</option>
          <option  value="3">3</option>
          <option  value="4">4</option>
          <option  value="5">5</option>
          <option  value="6">6</option>
          <option  value="7">7</option>
          <option  value="8">8</option>
        </select>
      </div>
      <Calendar style={style}
                width="402px"
                onChange={this.onChange}
                getDate={this.getDate}
                onClickYear={this.onClickYear}
              />
      <div>
        <div><button onClick={this.newRes} >Lets Fly!</button></div>
          <Reservation/>
      </div>
      </div>
    )
  }
}
export default ResPage;
