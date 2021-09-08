import Vue from 'vue';

import App from './App.vue'
import './components/BaseComponentInit'
import './components/FormGenerator'
new Vue({
    el: "#app",
    data: {
        message: "World",
    },
    render: h => h(App)
})