import { reactive, isReactive } from 'vue'

const state = reactive({ count: 1});

let a = state.count;

console.log(a);