
import bySource from 'libs/bySource'

export const GET_BY_SOURCE = Symbol('GET_BY_SOURCE')
export const GET_BY_SOURCE_SUCCESS = Symbol('GET_BY_SOURCE_SUCCESS')

export function getBySource ({ source }) {
  return dispatch => {
    dispatch({
      type: GET_BY_SOURCE
    })

    return bySource.getBySource({ source }).then(res => {
      dispatch(onGetBySource(source, res))
    })
  }
}

function onGetBySource (source, payload) {
  return {
    type: GET_BY_SOURCE_SUCCESS,
    source,
    payload
  }
}
