<template>
    <div>
        <div>
            <h3>数组数据</h3>
            <div>
                <div class="cell" v-for="item in list" :key="item">{{item}}</div>
                <div class="cell result" v-if="result">{{result}}</div>
                <button @click="getKthItem">计算第{{k}}大元素</button>
            </div>
        </div>
    </div>
</template>

<script>
import getKthBiggest from './getKthbiggest'

export default {
    data() {
        return {
            list: [1, 3, 2, 4, 7, 9, 10, 0, 6, 5, 8, 11, 12, 15, 14, 16, 17, 19, 18, 13, 20],
            k: 10,
            result: null
        }
    },
    methods:{
        getKthItem() {
            this.result = getKthBiggest(this.list, null, this.k);
        }
    }
}
</script>

<style scoped>
.cell {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px dotted #ccc;
    margin: 10px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
}
.result {
    color: rgb(224, 107, 107);
    border: 1px solid rgb(224, 107, 107);
}
.heap {
    width: 400px;
    height: 400px;
    border: 1px dotted #ccc;
}
</style>