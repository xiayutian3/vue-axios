<template>
  <div class="wrap">
    <!-- 联系人列表 -->
    <van-contact-list
      v-model="chosenContactId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
// import { Button } from 'vant'
import { getList, createUser, updateUser, deleteUser } from '@/api'
export default {
  name: 'contact-list',
  props: [],
  data () {
    return {
      chosenContactId: null,
      list: []
    }
  },
  async created () {
    let { data, status } = await getList()
    if (status === 200) {
      this.list = data
    }

    // 创建用户接口
    // "name":"张二",
    // "tel":15665485695,
    // "id": 1

    // let obj = {
    //   name: '肥仔',
    //   tel: 123654,
    //   id: 11
    // }
    // let createStatus = await createUser(obj)
    // console.log(1212, createStatus)

    // 更新用户
    // "_id": "5dac00bd9d4b8b0ac0bf3403",
    // "name": "肥仔",
    // "tel": 123654,
    // "id": 11
    // let id = '5dac00bd9d4b8b0ac0bf3403'
    // let newObj = {
    //   name: '你就是肥仔',
    //   tel: 99999999,
    //   id: 9
    // }

    // let updateStatus = await updateUser(id, newObj)
    // console.log(9, updateStatus)
  },
  mounted () {},
  computed: {},
  methods: {
    onAdd () {

    },
    onEdit () {

    },
    onSelect () {

    }
  },
  // components: {
  //   [Button.name]: Button
  // },
  watch: {}
}

</script>
<style lang='less' scoped>

</style>
