import React, { Component } from 'react'
import logo from "./logo.png"
export class Image extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="Newsapp" className='w-150 h-75'/>
      </div>
    )
  }
}

export default Image
