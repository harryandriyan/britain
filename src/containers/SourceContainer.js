import React, { Component } from 'react'
import LeftSidebar from '../components/LeftSidebar'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'

class SourceContainer extends Component {
  render () {
    let { sources } = this.props
    return (
      <div className='row inner-container'>
        <LeftSidebar />
        <div className='col-9'>
          <div className='card-group' style={{ display: 'block' }}>
            {
              sources.has('sources') ? sources.get('sources').take(100).map(item => (
                <div className='card' key={item.get('id')}>
                  <div className='card-body'>
                    <h5 className='card-title'>{ item.get('name') }</h5>
                    <p className='card-text'>
                      { item.get('description') }
                    </p>
                    <a href={item.get('url')} target='_blank' className='card-link'>Visit</a>
                  </div>
                </div>
              )) : 'Loading'
            }
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    sources: state.sources
  }
}

SourceContainer.propTypes = {
  sources: PropTypes.instanceOf(Map).isRequired
}

export { SourceContainer }
export default connect(mapStateToProps)(SourceContainer)
