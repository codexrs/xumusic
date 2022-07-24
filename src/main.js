import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';
//按需引入
import { Table,TableColumn,Carousel,CarouselItem  } from 'element-ui';
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Carousel);
Vue.use(CarouselItem)

//事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  
  router,
  store
}).$mount('#app')
