import React, { Component } from "react";
import Reservation from "./reservations";
import Calendar from "./calendar";
import uuid from "uuid"

const style = {
  position: "relative",
  margin: "50px auto",
  width:"302px"
};

class ResPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
    this.newRes = this.newRes.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    console.log(this, "On Change");
    console.log(this.getDate);
    const val = event;
    let newDate = val;
    this.setState({ date: newDate });
  }

  getDate(event) {
    console.log(this.new);
  }

  newRes(event) {
    var pickUpLocation = this.refs.hangarPickup.value;
    if (pickUpLocation == "Other") {
      let pickUpZone = prompt("Enter Location for Pick up");
      pickUpLocation = pickUpZone;
      const Res = {
        groupUID:uuid(),
        operatingArea: this.refs.opsArea.value,
        pickupLocation: pickUpLocation,
        numberOfAttendees: this.refs.guest.value,
        day: this.state.date,
        timeSlot: this.refs.pickupTime.value
      };
      this.props.newReservation(Res);
      return;
    } else if (this.refs.opsArea.value == "null"||pickUpLocation=="null"||this.refs.guest.value=="null"||this.refs.pickupTime.value=="null"){
      alert("Please Update Reservation")
      }else {
      const Res = {
        groupUID:uuid(),
        operatingArea: this.refs.opsArea.value,
        pickupLocation: pickUpLocation,
        numberOfAttendees: this.refs.guest.value,
        day: this.state.date,
        timeSlot: this.refs.pickupTime.value
      };
      console.log(Res.hangarPickup);
      this.props.newReservation(Res);
      alert("Get ready to Fly ");
    }
  }

  onClickYear(event) {
    const val = event;
  }
  onDayClick = (e, reservationDate) => {
    console.log(e.target, reservationDate);
    this.setState({ date: reservationDate });
  };

  render() {
    let day = "";
    return (
      <div className="selectionpage">
        <div className="selection">
          <select className="dropdownStyle" ref="opsArea">
            <option
              className="dropdownStyle"
              value="null"
              disable="true"
              selected
              hidden
            >
              Choose Your Operating Area
            </option>
            <option className="dropdownStyle" value="North Operating Area">
              North Operation Area
            </option>
            <option className="dropdownStyle" value="Central Operating Area">
              Central Operation Area
            </option>
            <option className="dropdownStyle" value="Southern Operating Area">
              South Operation Area
            </option>
          </select>
        </div>
        <div className="selection">
          <select className="dropdownStyle" ref="hangarPickup">
            <option
              className="dropdownStyle"
              value="null"
              disable="true"
              selected
              hidden
            >
              Choose Your Pick Up Location
            </option>
            <option className="dropdownStyle" value="Heber Hangar">
              Heber Hanger
            </option>
            <option className="dropdownStyle" value="North Salt Lake Hangar">
              North Salt Lake Hanger
            </option>
            <option className="dropdownStyle" value="Other">
              Other
            </option>
          </select>
        </div>
        <div className="selection">
          <select className="dropdownStyle" ref="guest">
            <option
              className="dropdownStyle"
              value="null"
              disable="true"
              selected
              hidden
            >
              Choose the amount of Guest
            </option>
            <option className="dropdownStyle" value="1">
              1
            </option>
            <option className="dropdownStyle" value="2">
              2
            </option>
            <option className="dropdownStyle" value="3">
              3
            </option>
            <option className="dropdownStyle" value="4">
              4
            </option>
            <option className="dropdownStyle" value="5">
              5
            </option>
            <option className="dropdownStyle" value="6">
              6
            </option>
            <option className="dropdownStyle" value="7">
              7
            </option>
            <option className="dropdownStyle" value="8">
              8
            </option>
          </select>
        </div>
        <div className="selection">
          <select className="dropdownStyle" ref="pickupTime">
            <option disable="true"  value= "null" selected hidden>
              AM or PM
            </option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <Calendar
          style={style}
          onDayClick={(e, day) => this.onDayClick(e, day)}
        />
        <div>
          <div>
            <button onClick={this.newRes}>Lets Fly!</button>
          </div>
          <Reservation />
        </div>
      </div>
    );
  }
}
export default ResPage;
