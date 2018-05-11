
import React, { Component } from 'react';

class PicBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var url = Object.keys(this.props.src).map(key => this.props.src[key]);

    const picAdd = Object.keys(url).map(key => {
      let newDis = {};
      newDis[key] = url[key];
      return newDis[key].url;
    });
    console.log(this.props.dates);
    return (
      <div className="BrianBoitano">
        {Object.keys(picAdd, url).map(key => {
          return (
            <div>
              <h3 className="font">{this.props.dates[key]}</h3>
              <img
                className="Display"
                key={key}
                date={this.props.src[key]}
                src={picAdd[key]}
                alt={picAdd[key].url}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default PicBox;
