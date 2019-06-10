import Vue from 'vue'
import App from './App.vue'
// import VueNativeSock from 'vue-native-websocket'

// Vue.use(VueNativeSock, 'ws://localhost:8000')

Vue.config.productionTip = false

new Vue({
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
