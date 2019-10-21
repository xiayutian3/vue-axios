<template>
  <div class="wrap">
    <!-- 联系人列表 -->
    <van-contact-list
      v-model="chosenContactId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
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
      list: [],
      showEdit: false, // 弹框的显示
      editingContact: {}, // 正在编辑的联系人得我信息
      isEdit: false // false 是新建，true 是编辑
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
    async onAdd () {
      this.showEdit = true
      this.isEdit = false
      this.editingContact = {}
    },
    async onEdit (item) {
      this.showEdit = true
      this.isEdit = true
      this.editingContact = item
    },
    async onSave (content) {
      let id = content._id
      if (this.isEdit) {
        console.log(content)
        let { status } = await updateUser(id, content)
        if (status === 200) {
          this.$toast.success('更新成功')
          this.list = this.list.map(item => item._id === content._id ? content : item)
        }
      } else {
        let { status, data } = await createUser(content)
        if (status === 200) {
          this.list.push(data)
        }
      }
      this.showEdit = false
    },
    async onDelete (content) {
      let { _id } = content
      let index = this.list.findIndex(item => item.name === content.name)
      let { status } = await deleteUser(_id)
      if (status === 204) {
        this.$toast.success('删除成功')
        this.list.splice(index, 1)
        this.showEdit = false
      }
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
