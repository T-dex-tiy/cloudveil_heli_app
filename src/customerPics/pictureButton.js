import React, { Component } from 'react';
import Pics from './pictures';

class PicturePicker extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <option>
      {this.props.index}
    </option>
    )
  }
}
 export default PicturePicker;
