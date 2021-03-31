import request from 'superagent'

const baseUrl = '/api/v1/beers'

export function getBeers() {
    return request
        .get(baseUrl)
        .then(res => res.body)
}