import { SET_YEAST } from '../actions/hops'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_YEAST:
            return action.yeast
        default:
            return state
    }
}

export default reducer