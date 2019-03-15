import React, { Component } from 'react';
import './Head.css'

class Head extends Component {

  constructor(props) {
        super(props)

        this.state = {
            title: 'Easy Medical Service',
        }
  }

  render() {
    let output = (
        <h1 className="text-container"> {this.state.title} </h1>
    )

    return (
      <div>
         {output}
      </div>
    )
  }
}
export default Head;
