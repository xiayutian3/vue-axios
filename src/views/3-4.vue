<template>
  <div class="wrap">

  </div>
</template>

<script>
// 错误处理：请求错误时进行的处理
import axios from 'axios'
export default {
  name: 'axios3-4',
  props: [],
  data () {
    return {

    }
  },
  created () {
    axios.interceptors.request.use(
      config => {
        return config
      }, err => {
        return Promise.reject(err)
      }
    )
    axios.interceptors.response.use(
      res => {
        return res
      }, err => {
        return Promise.reject(err)
      })
    axios.get('/data.json').then(
      res => {
        console.log(res)
      }
    ).catch(err => {
      console.log(err)
    })

    // 例子：实际开发中，一般添加统一的错误处理 (不是每个请求都.catch来捕获)
    let instance = axios.create({})
    instance.interceptors.request.use(
      config => {
        return config
      }, err => {
        // 请求错误 一般http状态码以4开头，常见：401超时，404 not found

        // 添加统一错误处理
        // $('#modal').show()
        // setTimeout(() => {
        //   $('#modal').hide()
        // }, 2000)
        return Promise.reject(err)
      }
    )
    instance.interceptors.response.use(
      res => {
        return res
      }, err => {
        // 响应错误处理 一般http状态码以5开头，500服务器错误，502系统重启

        // 添加统一错误处理
        // $('#modal').show()
        // setTimeout(() => {
        //   $('#modal').hide()
        // }, 2000)
        return Promise.reject(err)
      }
    )

    // 对特殊接口进行错误处理
    instance.get('/data.json')
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
