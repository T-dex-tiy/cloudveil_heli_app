import React, { Component } from 'react';

class PicBox extends Component{
  constructor(props){
    super(props)
  }

  render(){
    var url= Object.keys(this.props.src).map(key=>this.props.src[key])
    var urltest= Object.keys(this.props.src).map(key=>key)
    // console.log(url);
    const picAdd= Object.keys(url).map(key=>{
      let newDis={}
      newDis[key]=url[key]
      return newDis[key].url
    })
    // const date= Object.keys(this.props.dates).reduce(function(total, current){
    //   total[current.key]=current.value
    //   console.log(total);
    //
    // })
    // const head=date.map(key=>key);
    return(
        <div className="BrianBoitano">
          {Object.keys(picAdd).map(key=>{
          return <div><img className="Display" key={key} src={picAdd[key]} alt={picAdd[key].url}/></div>
        })}
        </div>
    )
  }
}
export default PicBox
