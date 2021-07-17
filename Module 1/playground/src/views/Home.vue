<template>
    <div>
        <ul>
            <li v-for="item in linkList" :key="item.path">
                <router-link :to="item.path">{{item.name}}</router-link>
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
                }
            ]
        }
    }
}
</script>


<style scoped>
    li {
        list-style: none;
    }
</style>