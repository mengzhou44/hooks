import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/'

export async function fetchResource(resource, callback) {
    let response = await axios.get(baseUrl + resource)
    callback(response.data)
}
