<template>
  <div>

  </div>
</template>

<script>
// 并发请求：同时进行多个请求，并统一处理返回值
import axios from 'axios'
export default {
  name: 'axios2-5',
  created () {
    // axios.all()  axios.spread
    axios.all([
      axios.get('/data.json'),
      axios.get('city.json')
    ]).then(
      axios.spread((data1, data2) => {
        console.log(data1)
        console.log(data2)
      })
    )
  }

}
</script>

<style>

</style>
