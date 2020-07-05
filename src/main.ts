import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/animate.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/owl.carousel.css'
import './assets/css/prettyPhoto.css'
import './assets/css/simpletextrotator.css'
import './assets/css/style.css'

import './assets/js/vendor/jquery-1.11.2.min.js'
import './assets/js/vendor/bootstrap.min.js'
import './assets/js/isotope.pkgd.min.js'
import './assets/js/jquery.nicescroll.min.js'
import './assets/js/wow.min.js'
import './assets/js/jquery.simple-text-rotator.min.js'
import './assets/js/jquery.prettyPhoto.js'
// import './assets/js/custom'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
