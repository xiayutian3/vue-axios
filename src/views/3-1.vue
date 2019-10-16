<template>
  <div class="wrap">

  </div>
</template>

<script>
// axios实例
// 后端接口地址有多个，并且超时时长不一样
import axios from 'axios'
export default {
  name: 'axios3-1',
  props: [],
  data () {
    return {

    }
  },
  created () {
    let instance = axios.create({
      baseURL: 'http://localhost:8080',
      timeout: 5 * 1000
    })
    instance.get('data.json').then(res => {
      console.log(res)
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
