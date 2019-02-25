import { combineReducers } from 'redux'

import explore from './explore'
import news from './news'
import sources from './sources'

export default combineReducers({
  explore,
  news,
  sources
})
