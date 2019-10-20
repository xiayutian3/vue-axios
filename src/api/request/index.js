import axios from 'axios'
import Vue from 'vue'
let instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2 * 1000
})
instance.interceptors.request.use(
  config => {
    Vue.prototype.$toast.loading({
      mask: true,
      message: '加载中...',
      duration: 0
    })
    return config
  }, err => {
    return Promise.reject(err)
  }
)
instance.interceptors.response.use(
  res => {
    Vue.prototype.$toast.clear()
    return res
  }, err => {
    return Promise.reject(err)
  }
)

export default instance
