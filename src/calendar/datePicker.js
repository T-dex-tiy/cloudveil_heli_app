import React, { Component } from "react";
import Reservation from "./reservations";
import Calendar from "./calendar";

const style = {
  position: "relative",
  margin: "50px auto"
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
        opsArea: this.refs.opsArea.value,
        hangarPickup: pickUpLocation,
        guest: this.refs.guest.value,
        day: this.state.date,
        time: this.refs.pickupTime.value
      };
      this.props.newReservation(Res);
      console.log(pickUpZone, pickUpLocation);
      return;
    } else {
      const Res = {
        opsArea: this.refs.opsArea.value,
        hangarPickup: pickUpLocation,
        guest: this.refs.guest.value,
        day: this.state.date,
        time: this.refs.pickupTime.value
      };
      console.log(Res.hangarPickup);
      this.props.newReservation(Res);
      alert("Get ready to Fly ");
    }
  }

  onClickYear(event) {
    const val = event;
    console.log("Clicked Year: ", val);
  }
  onDayClick = (e, day) => {
    console.log(day);
  };
  render() {
    console.log(this.props.users);
    console.log(this.props.reservations);
    let day = "";
    console.log(day);
    return (
      <div className="selectionpage">
        <div className="selection">
          <select className="dropdownStyle" ref="opsArea">
            <option
              className="dropdownStyle"
              value=""
              disable="true"
              selected
              hidden
            >
              Choose Your Operating Area
            </option>
            <option className="dropdownStyle" value="North">
              North Operation Area
            </option>
            <option className="dropdownStyle" value="Central">
              Central Operation Area
            </option>
            <option className="dropdownStyle" value="South">
              South Operation Area
            </option>
          </select>
        </div>
        <div className="selection">
          <select className="dropdownStyle" ref="hangarPickup">
            <option
              className="dropdownStyle"
              value=""
              disable="true"
              selected
              hidden
            >
              Choose Your Pick Up Location
            </option>
            <option className="dropdownStyle" value="Heber">
              Heber Hanger
            </option>
            <option className="dropdownStyle" value="NSL">
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
              value=""
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
            <option disable="true" selected hidden>
              AM or PM
            </option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <Calendar
          style={style}
          width="402px"
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
