import request from 'superagent'

const baseUrl = '/api/v1/hops'

export function getHops() {
    return request
        .get(baseUrl)
        .then(res => JSON.parse(res.body.text))
}