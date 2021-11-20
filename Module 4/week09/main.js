import Vue from 'vue';
import ElementUI from 'element-ui' //element-ui的全部组件
// import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI
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