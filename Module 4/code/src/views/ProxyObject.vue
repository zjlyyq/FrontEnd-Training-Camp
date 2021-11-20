<template>
  <div class="page">
    <Monaco>
      <pre>
var obj = {
    level1: {
        level2: {
            level3: "hello",
        },
    },
    level12: "haha",
};
let proxyObj = new Proxy(obj, {
    get: function (target, key, receiver) {
        console.log(`get被调用，key:[${key}]`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, receiver) {
        console.log(`set被调用，设置数组 key:[${key}], value: [${receiver}]`);
        return Reflect.set(target, key, receiver);
    },
});

proxyObj.level12 = 3;
proxyObj.level1.level2.level3 = "hi";
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
    var obj = {
      level11: {
        level21: "hello",
      },
      level12: "world",
    };
    let proxyObj = new Proxy(obj, {
      get: function (target, key, receiver) {
        console.log(`get被调用，key:[${key}]`);
        return Reflect.get(target, key, receiver);
      },
      set: function (target, key, receiver) {
        console.log(`set被调用，设置 key:[${key}], value: [${receiver}]`);
        return Reflect.set(target, key, receiver);
      },
      deleteProperty: function (target, key) {
        if (key === "level13") {
          throw new Error(` 不能删除属性 "${key}"`);
        }
        console.log(`删除属性，key:[${key}]`);
        delete target[key];
        return true;
      },
    });

    proxyObj.level13 = 3;
    proxyObj.level11.level21 = "hi";

    delete proxyObj.level12;
    //throw error
    delete proxyObj.level13;
    return {};
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 800px;
}
</style>
