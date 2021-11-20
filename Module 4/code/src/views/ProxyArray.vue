<template>
  <div class="page">
    <Monaco>
      <pre>
var arr = [1, 2, 3];
let obj = new Proxy(arr, {
  get: function (target, key, receiver) {
    console.log(`get被调用，key:[${key}]]`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, receiver) {
    console.log(`set被调用，设置数组 key:[${key}]], value: [${receiver}]`);
    return Reflect.set(target, key, receiver);
  },
});
// 1. 改变已存在索引的数据
obj[2] = 3;
// 2. push,unshift添加数据
obj.push(4);
// 3. 直接通过索引添加数组
obj[5] = 5;
// 4. 删除数组元素
obj.splice(1, 1);
</pre
      >
    </Monaco>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Monaco from "../components/Monaco.vue";
export default {
  components: { Monaco },

  setup() {
    var arr = [1, 2, 3];
    let obj = new Proxy(arr, {
      get: function (target, key, receiver) {
        console.log(`get被调用，key:[${key}]`);
        return Reflect.get(target, key, receiver);
      },
      set: function (target, key, receiver) {
        console.log(`set被调用，设置数组 key:[${key}], value: [${receiver}]`);
        return Reflect.set(target, key, receiver);
      },
    });
    console.log(obj.keys());
    // 1. 改变已存在索引的数据
    obj[2] = 3;
    // 2. push,unshift添加数据
    obj.push(4);
    // 3. 直接通过索引添加数组
    obj[5] = 5;
    // 4. 删除数组元素
    obj.splice(1, 1);

    return {};
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 800px;
}
</style>
