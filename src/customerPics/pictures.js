import React, { Component } from 'react';
import PicturePicker from './pictureButton';
import PicDisplay from './picturedisplay';


class Pics extends Component{
  constructor(props){
    super(props);
  }



    render(){
      return(
        <div>
        <div className="dropdownSelector">
        Dates:
        <select name ="Dates" placeholder="Pick a date" index="Pick a Day" value={this.props.dates}>
        {Object.keys(this.props.dates).map(keys=>{
          return <PicturePicker key={keys} index={keys} value={this.props.dates[keys]}/>
        })}
      </select></div>
        <div className="PicDisplay">
          {Object.keys(this.props.picture).map(keys=>{
            return <PicDisplay key={keys} index={keys} src={this.props.picture[keys]}/>})}
        </div>
        </div>
    )
  }
}
export default Pics;
