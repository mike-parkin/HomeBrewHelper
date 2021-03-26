import { getYeast} from '../apis/yeast'

export const SET_YEAST = 'SET_YEAST'

export function setYeast(yeast) {
    return {
        type: SET_YEAST,
        yeast: yeast
    }
}

export function fetchYeast() {
    return dispatch => {
        return getYeast()
            .then(response => {
                dispatch(setYeast(response.data))
                return null
            })
    }
}

