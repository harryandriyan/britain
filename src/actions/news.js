
import news from 'libs/news'

export const GET_HEADLINES = Symbol('GET_HEADLINES')
export const GET_HEADLINES_SUCCESS = Symbol('GET_HEADLINES_SUCCESS')

export function getHeadlines ({ country }) {
  return dispatch => {
    dispatch({
      type: GET_HEADLINES
    })

    return news.getHeadlines({ country }).then(res => {
      dispatch(onGetHeadlines(country, res))
    })
  }
}

function onGetHeadlines (country, payload) {
  return {
    type: GET_HEADLINES_SUCCESS,
    country,
    payload
  }
}
