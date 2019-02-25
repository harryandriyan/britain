import React, { Component } from 'react'
import LeftSidebar from "../components/LeftSidebar"

class HomeContainer extends Component {
  
  render () {
    return (
      <div className="row">
        <LeftSidebar />
        <div className="col-9">
          Home
        </div>
      </div>
    )
  }
}

export default HomeContainer