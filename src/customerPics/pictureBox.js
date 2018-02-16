import React, { Component } from 'react';

class PicBox extends Component{
  constructor(props){
    super(props)
  }

  render(){
    var url= Object.keys(this.props.src).map(key=>this.props.src[key])
    // console.log(url);
    const picAdd= Object.keys(url).map(key=>{
      let newDis={}
      newDis[key]=url[key]
      return newDis[key].url
    })
    return(
      <div>
      {Object.keys(picAdd).map(key=>{
        return <img key={key} src={picAdd[key]} alt={picAdd[key].url}/>
      })}
      </div>
    )
  }
}
export default PicBox
