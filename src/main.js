import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'
import VueI18n from 'vue-i18n';
import en from 'view-design/dist/locale/en-US';
import zh from 'view-design/dist/locale/zh-CN';
Vue.use(VueI18n);
Vue.config.productionTip = false
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': Object.assign(require('@/assets/languages/zh.json'), zh),
    'en': Object.assign(require('@/assets/languages/en.json'), en)
  }
});
new Vue({
  router, i18n,
  render: h => h(App)
}).$mount('#app')
