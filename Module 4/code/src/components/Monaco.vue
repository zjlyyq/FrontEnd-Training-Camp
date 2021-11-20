<template>
  <div ref="meditor" class="monaco"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import { reactive } from "@vue/reactivity";
import * as monaco from "monaco-editor";

import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

export default {
  setup(props, { slots }) {
    const meditor = ref(null);
    let editor = ref(null);
    onMounted(() => {
      let code = "";
      if (slots.default && slots.default()[0]) {
        code = slots.default()[0].children;
      }
      console.log("code>>>", code);
      editor = monaco.editor.create(meditor.value, {
        value: code,
        language: "javascript",
        theme: "vs-dark",
      });
      console.log("onMounted", editor);
    });

    const getEditorContent = () => {
      if (editor) {
        return editor.getValue();
      } else {
        return "";
      }
    };

    return {
      meditor,
      editor,
      getEditorContent,
    };
  },
};
</script>

<style lang="less" scoped>
.monaco {
  height: 500px;
  text-align: left;
}
</style>
