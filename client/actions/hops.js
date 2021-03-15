import { getHops } from '../apis/hops'

export const SET_HOPS = 'SET_HOPS'

export function setHops(hops) {
    return {
        type: SET_HOPS,
        hops: hops
    }
}

export function fetchHops() {
    return dispatch => {
        return getHops()
            .then(response => {
                dispatch(setHops(response.data))
                return null
            })
    }
}

