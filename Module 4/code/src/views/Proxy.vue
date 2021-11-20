<template>
  <div class="page">
    <Monaco>
      <pre>
var obj = {};
var proxyObj = new Proxy(obj, {
  get(target, key, receiver) {
    console.log("get被调用");
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log("set被调用");
    return Reflect.set(target, key, value, receiver);
  },
});

proxyObj.name = "hello";

console.log(obj);

</pre
      >
    </Monaco>
  </div>
</template>

<script>
import Monaco from "../components/Monaco.vue";
export default {
  components: { Monaco },

  setup() {
    var obj = {};
    var proxyObj = new Proxy(obj, {
      get(target, key, receiver) {
        console.log("get被调用", key);
        return Reflect.get(target, key, receiver);
      },
      set(target, key, value, receiver) {
        console.log("set被调用", key, value);
        return Reflect.set(target, key, value, receiver);
      },
    });

    proxyObj.name = "hello";
    console.log(obj);

    return {};
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 800px;
}
</style>
