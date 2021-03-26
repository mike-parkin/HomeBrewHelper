import request from 'superagent'

const baseUrl = '/api/v1/yeast'

export function getYeast() {
    return request
        .get(baseUrl)
        .then(res => JSON.parse(res.body.text))
}