import Vue from 'vue';
import iView from 'iview';
import { router } from './router/index';
import { appRouter } from './router/router';
import store from './store';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
// import util from '@/libs/util.js';
Vue.prototype.$axios = axios;

Vue.use(iView);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: ''
    },
    mounted () {
        this.currentPageName = this.$route.name;
        // axios.defaults.baseURL = 'http://47.93.20.40:8081';
        axios.defaults.baseURL = 'http://localhost:8081';
        axios.defaults.headers.common['Access-Token'] = localStorage.getItem('usertoken');
        // Vue.use(axios, util.ajax);
    },
    created () {
    }
});
