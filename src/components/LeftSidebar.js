import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'

import { getSources } from 'actions/sources'

class LeftSidebar extends Component {
  static async getInitialProps ({ store, query }) {
    let country = query.country || 'id'
    await store.dispatch(getSources({ country }))
  }

  componentDidMount () {
    let { getSources } = this.props
    getSources({ country: 'us' })
  }
  
  render () {
    let { sources } = this.props
    return (
      <div className="col-3">
        <div className="list-group">
        <h4>News Source</h4>
        {
          sources.has('sources') ? sources.get('sources').take(20).map(item => (
            <a href={`/explore/${item.get('id')}`} target='_blank' className="list-group-item list-group-item-action">
              { item.get('name') }
            </a>
          )) : "Loading"
        }
        More ... 
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

LeftSidebar.propTypes = {
  sources: PropTypes.instanceOf(Map).isRequired,
  getSources: PropTypes.func.isRequired
}

export { LeftSidebar }
export default connect(mapStateToProps, {
  getSources
})(LeftSidebar)