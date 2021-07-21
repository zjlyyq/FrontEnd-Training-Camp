<template>
    <div>
        <ul>
            <li v-for="item in linkList" :key="item.path">
                <router-link :to="item.path" class="link">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            linkList: [
                {
                    name: '模板引擎',
                    path: '/templateEngine'
                },
                {
                    name: '0717课后作业：实现下面代码中的 render 方法，并将模板字符串渲染成 DOM。',
                    path: '/templateEngine2'
                }
            ]
        }
    }
}
</script>


<style scoped>
    li {
        list-style: none;
        width: 300px;
        height: 200px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 10px;
        display: inline-block;
        text-align: center;
        vertical-align: bottom;
    }
    .link {
        vertical-align: middle;
    }
</style>