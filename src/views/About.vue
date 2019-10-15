<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'about',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('data.json').then(res => {
        console.log(res.data)
        // this.msg = res.data
      })
    }
  }
}
</script>
