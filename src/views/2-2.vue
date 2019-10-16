<template>
  <div class="">

  </div>
</template>
<script>
/**
    axios的请求方法  get post put patch delete

    get 获取数据
    post 提交数据 （表单提交+文件上传）
    put 更新数据 （整体更新，）
    patch 更新数据 （只更新修改了的数据）
    delete 删除数据
 */
import axios from 'axios'
export default {
  name: 'axios2-2',
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
      axios.get('data.json', {
        params: {
          id: 123
        }
      }).then(res => {
        console.log(res.data)
        // this.msg = res.data
      })

      axios({
        methods: 'get',
        url: 'data.json',
        params: { id: 456 }
      }).then(res => {
        console.log(res)
      })

      // post
      // form-data 表单提交（图片、文件上传，比较老的一种方式）
      // application/json(现在用的比较多)
      let data = {
        id: 1
      }
      axios.post('/post', data).then(res => {
        console.log(res)
      })
      axios({
        methods: 'post',
        url: '/post',
        data: data
      }).then(res => {
        console.log(res)
      })

      // form-data请求
      let formData = new FormData()
      for (let key in data) {
        formData.append(key, data[key])
      }
      axios.post('/post', formData).then(res => {
        console.log(res)
      })

      // put请求
      axios.put('/put', data).then(res => {
        console.log(res)
      })
      // patch请求
      axios.patch('/patch', data).then(res => {
        console.log(res)
      })

      // delete请求
      axios.delete('/delete', { // 放在url上
        params: {
          id: 123
        }
      }).then(res => {
        console.log(res)
      })

      axios.delete('/delete', { // 放在请求体中
        data: {
          id: 123
        }
      }).then(res => {
        console.log(res)
      })

      axios({
        methods: 'delete',
        url: '/delete',
        params: {}, // 参数放在URL上的
        data: {} // 参数放在请求体中的 （选其中一种）
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
