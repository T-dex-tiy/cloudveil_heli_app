import React, { Component } from 'react';
import PicturePicker from './pictureButton';
import PicDisplay from './picturedisplay';


class Pics extends Component{
  constructor(props){
    super(props);
  }



    render(){
      console.log(this.props.picture);
      return(
        <div>
        <div className="PicDisplay">
          {Object.keys(this.props.picture).map(keys=>{
            return <PicDisplay key={keys} index={keys} src={this.props.picture[keys]}/>})}
        </div>
        </div>
    )
  }
}
export default Pics;
