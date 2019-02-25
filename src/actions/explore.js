
import explore from 'libs/explore'

export const GET_EXPLORE = Symbol('GET_EXPLORE')
export const GET_EXPLORE_SUCCESS = Symbol('GET_EXPLORE_SUCCESS')

export function getExplore ({ country }) {
  return dispatch => {
    dispatch({
      type: GET_EXPLORE
    })

    return explore.getExplore({ country }).then(res => {
      dispatch(onGetExplore(country, res))
    })
  }
}

function onGetExplore (country, payload) {
  return {
    type: GET_EXPLORE_SUCCESS,
    country,
    payload
  }
}
