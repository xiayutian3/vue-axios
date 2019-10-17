<template>
  <div class="wrap">

  </div>
</template>

<script>
// 拦截器：在请求或响应被处理前拦截它们
// 请求拦截器，响应拦截器
import axios from 'axios'
export default {
  name: 'axios3-3',
  props: [],
  data () {
    return {

    }
  },
  created () {
    // 请求拦截器
    axios.interceptors.request.use(
      config => {
        // 在发送请求前做些什么
        return config
      }, err => {
        // 在请求错误的时候做些什么
        return Promise.reject(err)
      }
    )

    // 响应拦截器
    axios.interceptors.response.use(
      res => {
        // 请求成功对响应的数据做处理
        return res
      }, err => {
        // 响应错误做些什么
        return Promise.reject(err)
      }
    )

    // 取消拦截器（了解）
    let interceptors = axios.interceptors.request.use(
      config => {
        config.headers = {
          auth: true
        }
        return config
      }
    )
    axios.interceptors.request.eject(interceptors)

    // 例子 登录状态 （token：""）  需要登陆的接口
    let instance = axios.create({})
    instance.interceptors.request.use(
      config => {
        config.headers.token = ''
        return config
      }
    )

    // 不需要登录的接口
    // let instance1 = axios.create({})

    // 例如 移动端开发（loading）
    let instanceH5 = axios.create({})
    instanceH5.interceptors.request.use(
      config => {
        // $('#modal').show() //弹框展示
        return config
      }
    )
    instanceH5.interceptors.response.use(
      res => {
        // $('#modal').hide() //弹框隐藏
        return res
      }
    )
  },
  mounted () {},
  computed: {},
  methods: {},
  components: {},
  watch: {}
}

</script>
<style lang='less' scoped>
.wrap{

}
</style>
