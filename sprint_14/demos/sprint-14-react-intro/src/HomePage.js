

import React, { Component } from 'react'

export default class HomePage extends Component {

  render() {
    return (
      <div className="homepage-container">
        HomePage
        {this.props.day}
    </div>
    )
  }
}