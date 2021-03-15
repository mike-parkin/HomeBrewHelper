import request from 'superagent'
import { apiKey } from '../../apiKey'

const baseUrl = 'https://sandbox-api.brewerydb.com/v2/'

export function getHops() {
    return request
        .get(baseUrl + "hops/?key=" + apiKey)
        .then(res => {
            console.log(res.body)
            return res.body
        })
}