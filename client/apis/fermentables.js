import request from 'superagent'

const baseUrl = '/api/v1/fermentables'

export function getFermentables () {
    return request
        .get(baseUrl)
        .then(res => JSON.parse(res.body.text))
}