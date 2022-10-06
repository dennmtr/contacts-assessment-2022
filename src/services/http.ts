import axios, { AxiosRequestHeaders } from 'axios'

const origin = 'https://jsonplaceholder.typicode.com'

const baseURL = origin

const headers: AxiosRequestHeaders = {
  'Content-Type': 'application/json'
}

const http = axios.create({
  baseURL,
  headers,
  responseType: 'json'
})

export default http
