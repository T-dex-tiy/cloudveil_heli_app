import React, { Component } from 'react';
import PicturePicker from './pictureButton'

class Pics extends Component{
  constructor(props){
    super(props);
  }


    render(){
      return(
        <div>
        Dates:
        <select name ="Dates" placeholder="Pick a date" index="Pick a Day" value={this.props.dates}>
        {Object.keys(this.props.dates).map(keys=>{
          return <PicturePicker key={keys} index={keys} value={this.props.dates[keys]}/>
        })}
        </select>
        </div>
    )
  }
}
export default Pics;
