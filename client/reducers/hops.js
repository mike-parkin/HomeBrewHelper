import { SET_HOPS } from '../actions/hops'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOPS:
            return action.hops
        default:
            return state
    }
}

export default reducer