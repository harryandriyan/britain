
import sources from 'libs/sources'

export const GET_SOURCES = Symbol('GET_SOURCES')
export const GET_SOURCES_SUCCESS = Symbol('GET_SOURCES_SUCCESS')

export function getSources ({ country }) {
  return dispatch => {
    dispatch({
      type: GET_SOURCES
    })

    return sources.getSources({ country }).then(res => {
      dispatch(onGetSources(country, res))
    })
  }
}

function onGetSources (country, payload) {
  return {
    type: GET_SOURCES_SUCCESS,
    country,
    payload
  }
}
