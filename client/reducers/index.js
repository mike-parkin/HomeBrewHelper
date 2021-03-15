import { combineReducers } from 'redux'

import beers from './beers'
import hops from './hops'

export default combineReducers({
  beers,
  hops
})
