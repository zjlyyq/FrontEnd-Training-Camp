<template>
    <div>
        <div  class="li" v-for="item in linkList" :key="item.path">
            <router-link :to="item.path" class="link">{{item.name}}</router-link>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            linkList: [
                {
                    name: '模板引擎-支持列表渲染',
                    path: '/templateEngine'
                },
                {
                    name: '0715作业：算法-数组中第 K 大的元素',
                    path: '/kthbiggest'
                },
                {
                    name: ' 0717作业：模板引擎-增加v-if条件渲染',
                    path: '/templateEngine2'
                }
            ]
        }
    }
}
</script>


<style scoped>
    .li {
        list-style: none;
        width: 300px;
        height: 200px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 10px;
        display: inline-block;
        line-height: 200px;
        text-align: center;
        vertical-align: bottom;
    }
    .link {
        vertical-align: middle;
    }
</style>