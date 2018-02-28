// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import utils from './utils/index.js'
import api from './api/index.js'
import '../static/ue/ueditor.config'
import '../static/ue/ueditor.all'
import '../static/ue/lang/zh-cn/zh-cn.js'
import '../static/ue/ueditor.parse'

Vue.prototype.$utils = utils
Vue.prototype.$api = api
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
