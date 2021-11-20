const Vue = require('vue');
const createRenderer = require('vue-server-renderer').createRenderer;

// 第 1 步：创建一个 Vue 实例
const app = new Vue({
    template: `<div>{{msg}}</div>`,
    data: {
        msg: "hello vue-server-renderer"
    }
})

// 第 2 步：创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer()

// 第 3 步：将 Vue 实例渲染为 HTML
renderer.renderToString(app, (err, html) => {
    if (err) throw err
    console.log(html)
    // => <div data-server-rendered="true">Hello World</div>
})

renderer.renderToString(app).then(html => {
    console.log(html);
})