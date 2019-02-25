import React, { Component } from 'react'
import LeftSidebar from '../components/LeftSidebar'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { getBySource } from 'actions/bySource'

class BysourceContainer extends Component {
  static async getInitialProps ({ store, query }) {
    let source = query.source || 'cnn'
    await store.dispatch(getBySource({ source }))
  }
  componentDidMount () {
    let source = this.props.router.query.source || 'cnn'
    getBySource({ source })
  }

  render () {
    let { bySource } = this.props
    return (
      <div className='row inner-container'>
        <LeftSidebar />
        <div className='col-9'>
          <ul className='list-unstyled'>
            {
              bySource.has('articles') ? bySource.get('articles').take(20).map((item, key) => (
                <li className='media' key={key}>
                  <img className='mr-3' src={item.get('urlToImage') || 'https://via.placeholder.com/150x100'} alt={item.get('title')} style={{ maxWidth: '150px' }} />
                  <div className='media-body'>
                    <h5 className='mt-0 mb-1'>
                      <a href={item.get('url')} target='_blank' className='list-group-item list-group-item-action'>
                        { item.get('title') }
                      </a>
                      <small>Source : { item.get('source').get('name') }</small>{' |'}
                      <small>Date : { item.get('publishedAt') }</small>
                    </h5>
                    { item.get('description') }
                  </div>
                </li>
              )) : 'Loading'
            }
          </ul>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    bySource: state.bySource
  }
}

BysourceContainer.propTypes = {
  bySource: PropTypes.instanceOf(Map).isRequired,
  getBySource: PropTypes.func.isRequired
}

export { BysourceContainer }
export default connect(mapStateToProps, {
  getBySource
})(BysourceContainer)
