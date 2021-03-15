import request from 'superagent'
// import { apiKey } from '../../apiKey'

const baseUrl = '/api/v1/hops'

// const baseUrl = 'https://sandbox-api.brewerydb.com/v2/'

export function getHops() {
    return request
        .get(baseUrl)
        .then(res => JSON.parse(res.body.text))
}