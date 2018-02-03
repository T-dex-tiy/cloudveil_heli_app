import React, { Component } from 'react';
import Calendar from 'react-calendar'

class Pics extends Component{
  constructor(props){
    super(props);
  }


    render(){
      return(
        <div>
        Dates:
        <select name ="Dates" placeholder="Pick a date" value={this.props.dates}>
        {Object.keys(this.props.dates)}
        </select>
        </div>
    )
  }
}
export default Pics;
