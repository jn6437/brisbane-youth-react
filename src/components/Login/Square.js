import React, { Component } from 'react'
import Pin from './Pin'

class Square extends Component {
  
  render() {
    return (
      <button className="square" onClick={() =>
        this.props.clickHandler(this.props.value)
      }>
        { this.props.value }
      </button>
    );
  }
}

export default Square