import { getHops } from '../apis/hops'

export const SET_YEAST = 'SET_YEAST'

export function setYeast(yeast) {
    return {
        type: SET_YEAST,
        yeast: yeast
    }
}

export function fetchYeast() {
    return dispatch => {
        return getHops()
            .then(response => {
                dispatch(setYeast(response.data))
                return null
            })
    }
}

