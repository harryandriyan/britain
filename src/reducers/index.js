import { combineReducers } from 'redux'

import bySource from './bySource'
import explore from './explore'
import news from './news'
import sources from './sources'

export default combineReducers({
  bySource,
  explore,
  news,
  sources
})
