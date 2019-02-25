import React, { Component } from 'react'
import LeftSidebar from '../components/LeftSidebar'

class ExploreContainer extends Component {
  render () {
    return (
      <div className='row'>
        <LeftSidebar />
        <div className='col-9'>
          Explore
        </div>
      </div>
    )
  }
}

export default ExploreContainer
