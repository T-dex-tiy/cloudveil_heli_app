import React, { Component } from 'react';
import PicBox from './pictureBox'

class PicDisplay extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const picsDis=Object.keys(this.props.src).map(key=>this.props.src[key]);

    return(
      <div>
        <div>
          {Object.keys(picsDis).map(keys=>{
            return <PicBox key={keys} src={picsDis[keys]} dates={this.props.src}/>
          })}
        </div>
      </div>
    )
  }
}
export default PicDisplay;
