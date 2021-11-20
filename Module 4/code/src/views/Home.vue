<template>
  <div class="home">
    <a href="/#/defineProperty">defineProperty</a>
    <a href="/#/definePropertyArray">defineProperty Array</a>
    <a href="/#/definePropertyObject">defineProperty Object</a>
    <a href="/#/proxy">proxy</a>
    <a href="/#/proxyArray">proxy Array</a>
    <a href="/#/proxyObject">proxyObject</a>
    <a href="/#/vueTemplateCompiler">vueTemplateCompiler</a>
    <a href="/#/defineProperty"></a>
    <a href="/#/defineProperty"></a>
    <a href="/#/defineProperty"></a>
    <a href="/#/defineProperty"></a>
    <a href="/#/defineProperty"></a>
    <a href="/#/defineProperty"></a>
    <a href="/#/defineProperty"></a>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const toHome = () => {
      router.push({
        name: "home",
      });
    };

    return {
      toHome,
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  padding: 20px;
  background-color: #143258;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: repeat(100, 60px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  a {
    width: 100%;
    height: 100%;
    word-break: break-all;
    background-color: #38a4fe;
    &:hover {
      background-color: rgb(108, 84, 245);
      color: white;
    }
  }
}
</style>
