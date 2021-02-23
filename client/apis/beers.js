import request from 'superagent'

const baseUrl = '/api/v1/beers'

export function grabBeers() {
    request.get(baseUrl)
        .then(res => res.body)
}