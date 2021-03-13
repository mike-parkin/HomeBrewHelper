import request from 'superagent'

const baseUrl = '/api/v1/beers'

export function getBeers() {
    console.log('hello api')
    return request
        .get(baseUrl)
        .then(res => res.body)
}