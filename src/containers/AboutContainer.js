import React, { Component } from 'react'
import LeftSidebar from "../components/LeftSidebar"

class AboutContainer extends Component {
  
  render () {
    return (
      <div className="row">
        <LeftSidebar />
        <div className="col-9">
          About
        </div>
      </div>
    )
  }
}

export default AboutContainer