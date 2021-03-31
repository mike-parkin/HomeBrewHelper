import { getYeast } from '../apis/yeast'

export const SET_YEAST = 'SET_YEAST'

export function setYeast(yeast) {
    // console.log(yeast)
    return {
        type: SET_YEAST,
        yeast: yeast
    }
}

export function fetchYeast() {
    return dispatch => {
        return getYeast()
            .then(response => {
                // console.log(response.data)
                dispatch(setYeast(response.data))
                return null
            })
    }
}

