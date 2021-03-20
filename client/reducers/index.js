import { combineReducers } from 'redux'

import beers from './beers'
import hops from './hops'
import fermentables from './fermentables'

export default combineReducers({
  beers,
  hops,
  fermentables
})
