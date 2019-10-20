import Vue from 'vue'
import { Button, ContactCard, ContactList, ContactEdit, Toast } from 'vant'
Vue.use(Button)
Vue
  .use(ContactCard)
  .use(ContactList)
  .use(ContactEdit)
  .use(Toast)

Vue.prototype.$toast = Toast
