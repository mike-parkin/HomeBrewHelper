import { grabBeers } from '../apis/beers'


export const SET_BEERS = 'SET_BEERS'

export function setBeers(beers) {
    return {
        type: SET_BEERS,
        beers: beers
    }
}

export function fetchBeers() {
    console.log('hello')
    return dispatch => {
        return grabBeers()
            .then(res => {
                console.log("hello again")
                dispatch(setBeers(res))
                return null
            })
    }
}