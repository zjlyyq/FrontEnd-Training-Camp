<template>
  <div class="page">
    <Monaco>
      <pre>
    var arr = [1, 2, 3];
    arr.forEach((item, index) => {
      Object.defineProperty(arr, index, {
        get() {
          console.log("数组被getter拦截", index);
          return item;
        },
        set(value) {
          console.log("数组被setter拦截", index, value);
          return (item = value);
        },
      });
    });

    arr[1] = 2;
    arr[3] = 4;
    console.log(arr[2]);
    console.log(arr[3]);
    console.log('取出第一个元素前arr: ', arr.toString());
    arr.shift(0);
    console.log('取出第一个元素后arr: ', arr.toString());
    arr.splice(1, 1);
    console.log('被splice(1, 1)后arr: ', arr.toString());
    console.log('unshift进一个元素')；
    console.log(arr[2]);
    arr.unshift(0);
    </pre
      >
    </Monaco>
    <h3>Array push,unshift 不能被拦截</h3>
  </div>
</template>

<script>
import Monaco from "../components/Monaco.vue";
export default {
  components: { Monaco },
  setup() {
    var arr = [1, 2, 3];
    arr.forEach((item, index) => {
      Object.defineProperty(arr, index, {
        get() {
          console.log("数组被getter拦截", index);
          return item;
        },
        set(value) {
          console.log("数组被setter拦截", index, value);
          return (item = value);
        },
      });
    });

    arr[1] = 2;
    arr[3] = 4;
    console.log(arr[2]);
    console.log(arr[3]);
    console.log('取出第一个元素前arr: ', arr.toString());
    arr.shift(0);
    console.log('取出第一个元素后arr: ', arr.toString());
    arr.splice(1, 1);
    console.log('被splice(1, 1)后arr: ', arr.toString());
    arr.unshift(0);
    console.log(arr[2]);
    return {};
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
}
</style>
