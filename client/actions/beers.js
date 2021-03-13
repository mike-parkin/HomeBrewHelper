import { getBeers } from '../apis/beers'


export const SET_BEERS = 'SET_BEERS'

export function setBeers(beers) {
    return {
        type: SET_BEERS,
        beers: beers
    }
}

export function fetchBeers() {
    return dispatch => {
        return getBeers()
            .then(response => {
                dispatch(setBeers(response))
                return null
            })
    }
}