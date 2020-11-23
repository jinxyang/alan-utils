import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios'

interface RequestHeaders {
  Authorization?: string
}

const createFetch = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create(config)
  instance.interceptors.request.use(
    (config) => {
      console.log(config)
      const token = localStorage.getItem('token')
      if (token !== null) {
        const headers: RequestHeaders = { Authorization: token }
        config.headers = headers
      }
      return config
    },
    (error: AxiosError) => {
      return [null, error]
    },
  )
  return instance
}
export default createFetch
