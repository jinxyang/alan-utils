import { createFetch } from '../src'

const { request } = createFetch({
  baseURL: 'http://47.93.239.86:10088',
  timeout: 60000,
})

export default request
