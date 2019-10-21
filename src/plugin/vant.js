import Vue from 'vue'
import { Button, ContactCard, ContactList, ContactEdit, Toast, Popup } from 'vant'
Vue.use(Button)
Vue
  .use(ContactCard)
  .use(ContactList)
  .use(ContactEdit)
  .use(Toast)
  .use(Popup)

Vue.prototype.$toast = Toast
