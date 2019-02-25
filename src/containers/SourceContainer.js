import React, { Component } from 'react'
import LeftSidebar from '../components/LeftSidebar'

class SourcesContainer extends Component {
  render () {
    return (
      <div className='row'>
        <LeftSidebar />
        <div className='col-9'>
          Sources
        </div>
      </div>
    )
  }
}

export default SourcesContainer
