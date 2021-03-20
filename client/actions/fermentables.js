import { getFermentables } from '../apis/fermentables'

export const SET_FERMENTABLES = 'SET_FERMENTABLES'

export function setFermentables(ferm) {
    return {
        type: SET_FERMENTABLES,
        fermentables: ferm
    }
}

export function fetchFermentables() {
    return dispatch => {
        return getFermentables()
            .then(response => {
                dispatch(setFermentables(response.data))
                return null
            })
    }
}