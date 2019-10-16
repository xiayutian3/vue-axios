<template>
  <div class="wrap">

  </div>
</template>

<script>
// axios配置参数都有哪些
import axios from 'axios'
export default {
  name: 'axios3-2',
  props: [],
  data () {
    return {

    }
  },
  created () {
    // 常用的一些配置
    axios.create({
      baseURL: 'http://localhost:8080', // 请求的域名，基本地址
      timeout: 5 * 1000, //  请求超时时长
      url: '/data.json',
      methods: 'get,post,put,patch,delete', // 请求方法
      headers: { // 设置请求头
        token: ''
      },
      params: {}, // 请求参数拼接在url上
      data: {}// 请求参数放在请求体里
    })

    let config = {}
    axios.get('/data.json', config) // 其实config是一个对象，就是放上边的东西的
    axios.get('/data.json', {
      params: {
        id: 123
      }
    })

    // 1.axios全局配置(优先级最低)
    axios.defaults.timeout = 1000
    axios.defaults.baseURL = 'http://localhost:8080'
    // 2.axios实例配置(优先级中等)
    let instance = axios.create()
    instance.defaults.timeout = 3 * 1000
    // 3.axios请求配置(优先级最高)
    instance.get('/data.json', {
      timeout: 5 * 1000
    })
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
