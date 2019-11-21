import axios from 'axios'
import store from '../store'
import defaults from './config'
Object.assign(axios.defaults, defaults)

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status == "403") {
    error.response.data.error = "你没有权限进行此操作"
  } else if (error.response.status == "500") {
    error.response.data.error = "服务器请求异常，请刷新再试"
  } else if (error.response.status == "401") {
    store.commit("LOGOUT")
    error.response.data.error = "会话已失效，请重新登录"
  }
  return Promise.reject(error.response)
})

export default {
  host: defaults.baseURL,
  get(url, params = {}) {
    return axios({
      method: 'get',
      url: url,
      params,
      headers: {
        'Authorization': 'token ' + store.getters.token,
        'Accept': 'application/json; charset=UTF-8'
      }
    }).catch(err => {
      return Promise.reject(err.data)
    }).then(res => {
      if (res && res.status == 200) {
        return res.data
      }
    })
  },
  post(url, data = {}) {
    //可以设置默认值
    return axios({
      method: 'post',
      url: url,
      data: data,
      headers: {
        'Authorization': 'token ' + store.getters.token,
        'Accept': 'application/json; charset=UTF-8'
      }
    }).then(res => {
      if (res.status == 200 || res.status == 201) {
        return res.data
      }
    }).catch(err => {
      return Promise.reject(err.data)
    })
  },
  put(url, data) {
    return axios({
      method: 'put',
      url: url,
      data: data,
      headers: {
        'Authorization': 'token ' + store.getters.token,
        'content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      }
    }).then(res => {
      if (res.status == 200|| res.status == 201) {
        return res.data
      } 
    }).catch(err => {
      return Promise.reject(err.data)
    })
  },
  patch(url, data) {
    return axios({
      method: 'patch',
      url: url,
      data: data,
      headers: {
        'Authorization': 'token ' + store.getters.token,
        'content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      }
    }).then(res => {
      if (res.status == 200|| res.status == 201) {
        return res.data
      }
    }).catch(err => {
      return Promise.reject(err.data)
    })
  },
  delete(url, data) {
    return axios({
      method: 'delete',
      url: url,
      data: JSON.stringify(data),
      headers: {
        'Authorization': 'token ' + store.getters.token,
        'content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      }
    }).then(res => {
      if (res.status == 200) {
        return res.data
      }
    }).catch(err => {
      return Promise.reject(err.data)
    })
  },
  all(request1,params1,request2,params2){
    return axios.all([request1(...params1),request2(...params2)]).then(
      axios.spread((res1,res2)=>{
        return [res1.result, res2.result]
      })
    )
  }

}
