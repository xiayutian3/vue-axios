<template>
  <div class="wrap">

  </div>
</template>

<script>
// 用于取消正在进行的http请求（了解）
import axios from 'axios'
export default {
  name: 'axios3-5',
  props: [],
  data () {
    return {

    }
  },
  created () {
    let source = axios.CancelToken.source()
    axios.get('/data.json', {
      cancelToken: source.token
    }).then(res => console.log(res))
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log(err.message) // message : cancel http
        } else {
          // 处理错误
          console.log(err)
        }
      })

    // 取消请求(message可选)
    source.cancel('cancel http')

    // 什么情况下可能用到取消请求
    // 商城 3-5秒数据没回来，用户想搜索另一个东西，之前的东西就不要了
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
