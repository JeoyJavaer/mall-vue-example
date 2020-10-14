import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000'
    baseURL: 'http://152.136.185.210:8000/api/w6'
  })

  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log('request error:' + error);
  })

  instance.interceptors.response.use(result => {
    return result.data
  }, error => {
    console.log('response error:' + error)
  })


  return instance(config)
}
