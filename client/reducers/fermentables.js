import { SET_FERMENTABLES } from '../actions/fermentables'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FERMENTABLES:
            return action.fermentables
        default:
            return state
    }
}

export default reducer