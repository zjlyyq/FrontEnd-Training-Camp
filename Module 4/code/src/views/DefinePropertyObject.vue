<template>
  <div class="page">
    <Monaco>
      <pre>
    var obj = {};
    var value;
    Object.defineProperty(obj, "hobby", {
      get() {
        console.log("get被调用");
        return value;
      },
      set(v) {
        console.log("set被调用");
        value = "world";
      },
      configurable: true,
    });
    obj.age = 18;
    delete obj.hobby;
    console.log(obj.hobby);
</pre
      >
    </Monaco>
    <h3>Object 增加，删除属性，不能被拦截</h3>
  </div>
</template>

<script>
import Monaco from "../components/Monaco.vue";
export default {
  components: { Monaco },
  setup() {
    var obj = {};
    var value;
    Object.defineProperty(obj, "hobby", {
      get() {
        console.log("get被调用");
        return value;
      },
      set(v) {
        console.log("set被调用");
        value = "world";
      },
      configurable: true,
    });
    obj.age = 18;
    delete obj.hobby;
    console.log(obj.hobby);

    return {};
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 800px;
}
</style>
