import request from 'superagent'
// import { apiKey } from '../../apiKey'

const baseUrl = '/api/v1/hops'

// const baseUrl = 'https://sandbox-api.brewerydb.com/v2/'

export function getHops() {
    console.log('hi')
    return request
        .get(baseUrl)
        .then(res => res.body)
}