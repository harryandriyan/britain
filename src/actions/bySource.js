
import bySource from 'libs/bySource'

export const GET_BY_SOURCE = Symbol('GET_BY_SOURCE')
export const GET_BY_SOURCE_SUCCESS = Symbol('GET_BY_SOURCE_SUCCESS')

export function getBySource ({ country }) {
  return dispatch => {
    dispatch({
      type: GET_BY_SOURCE
    })

    return bySource.getBySource({ country }).then(res => {
      dispatch(onGetBySource(country, res))
    })
  }
}

function onGetBySource (country, payload) {
  return {
    type: GET_BY_SOURCE_SUCCESS,
    country,
    payload
  }
}
