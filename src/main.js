import Vue from 'vue'
import App from './App.vue'
import ElementUI from  'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Dialog from './components/dialog';

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(Dialog);

new Vue({
  render: h => h(App)
}).$mount('#app')
