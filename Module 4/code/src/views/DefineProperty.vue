<template>
  <div class="page">
    <Monaco>
      <pre>
var obj = {};
var value;
Object.defineProperty(o, "a", {
  get() {
    console.log("get被调用");
    return value;
  },
  set(v) {
    console.log("set被调用");
    value = "world";
  },
});
obj.name = "hello";
console.log(obj.name);
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
    var value;
    Object.defineProperty(obj, "name", {
      get() {
        console.log("get被调用");
        return value;
      },
      set(v) {
        console.log("set被调用");
        value = "world";
      },
    });
    obj.name = "hello";
    console.log(obj.name);

    return {};
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 800px;
}
</style>
