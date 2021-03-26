import { combineReducers } from 'redux'

import beers from './beers'
import hops from './hops'
import fermentables from './fermentables'
import yeast from './yeast'

export default combineReducers({
  beers,
  hops,
  fermentables,
  yeast
})
