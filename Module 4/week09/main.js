import Vue from 'vue';

import App from './App.vue'
import './components/base'
import './components/editor'
import './components/FormGenerator'
import './components/FormEditing'

new Vue({
    el: "#app",
    data: {
        message: "World",
    },
    render: h => h(App)
})