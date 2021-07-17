<template>
  <div id="app">
    <MonacoEditor
      theme="vs-dark"
      language="javascript"
      :editorMounted="onEditorMounted"
      :options="options"
    >
    </MonacoEditor>
  </div>
</template>

<script>
import MonacoEditor from "monaco-editor-vue";
// import text from './1.txt';
export default {
  name: 'App',
  data() {
    return {
      options: {
        value: "let a = 12;", // 初始值
        foldingStrategy: "indentation", // 代码可分小段折叠
        automaticLayout: true, // 自适应布局
        overviewRulerBorder: false, // 不要滚动条的边框
        autoClosingBrackets: true,
        tabSize: 2, // tab 缩进长度
        minimap: {
          enabled: false, // 不要小地图
        },
      },
    };
  },
  mounted() {
    setTimeout(() => {
      console.log(window.editor.getValue());
    }, 3000);
  },
  components: {
    MonacoEditor
  },
  methods: {
    onEditorMounted(editor, monaco) {
      window.editor = editor;
      window.monaco = monaco;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
