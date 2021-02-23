import { SET_BEERS } from '../actions/beers'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BEERS:
            return action.beers
        default:
            return state
    }
}

export default reducer