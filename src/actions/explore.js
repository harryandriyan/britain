
import explore from 'libs/explore'

export const GET_EXPLORE = Symbol('GET_EXPLORE')
export const GET_EXPLORE_SUCCESS = Symbol('GET_EXPLORE_SUCCESS')

export function getExplore ({ word }) {
  return dispatch => {
    dispatch({
      type: GET_EXPLORE
    })

    return explore.getExplore({ word }).then(res => {
      dispatch(onGetExplore(word, res))
    })
  }
}

function onGetExplore (word, payload) {
  return {
    type: GET_EXPLORE_SUCCESS,
    word,
    payload
  }
}
