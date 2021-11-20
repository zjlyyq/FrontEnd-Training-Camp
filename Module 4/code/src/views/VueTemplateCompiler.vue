<template>
  <div class="page">
    <Monaco ref="editor"></Monaco>
    <button @click="doComplie">iecompile</button>
    <button @click="doCompileToFunctions">compileToFunctions</button>
    <button @click="doParseComponent">parseComponent</button>
    <button @click="doGenerateCodeFrame">generateCodeFrame</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Monaco from "../components/Monaco.vue";
import templateCompiler from "vue-template-compiler";
export default {
  components: { Monaco },

  setup() {
    const editor = ref(null);

    const doComplie = () => {
      console.log("doComplie>>");
      let code = editor.value.getEditorContent();
      let reuslt = templateCompiler.compile(code);
      console.log(result);
    };

    const doCompileToFunctions = () => {
      let code = editor.value.getEditorContent();
      let reuslt = templateCompiler.compileToFunctions(code);
      console.log(result);
    };

    const doParseComponent = () => {
      let code = editor.value.getEditorContent();
      let reuslt = templateCompiler.parseComponent(code);
      console.log(result);
    };

    const doGenerateCodeFrame = () => {
      let code = editor.value.getEditorContent();
      let reuslt = templateCompiler.generateCodeFrame(code);
      console.log(result);
    };

    return {
      editor,
      doComplie,
      doCompileToFunctions,
      doParseComponent,
      doGenerateCodeFrame,
    };
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 800px;
}
</style>
