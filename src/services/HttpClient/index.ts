import axios from 'axios'

const $axios = axios.create({
  // test baseUrl for mock
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {},
})

export default $axios
