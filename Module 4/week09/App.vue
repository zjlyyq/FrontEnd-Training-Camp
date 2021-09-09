<template>
  <div class="container" style="display: flex; height: 98%">
    <div class="pans" style="width: 20%; border: 1px solid #ccc; padding: 10px">
      <div>
        <h3>布局容器（暂未实现。。。）</h3>
        <button class="meta" data-name="column" draggable="true">column</button>
        <button class="meta" data-name="row" draggable="true">row</button>
      </div>
      <div>
        <h3>表单元素</h3>
        <button class="meta" data-name="input" draggable="true">input</button>
        <button class="meta" data-name="checkbox" draggable="true">
          checkbox
        </button>
        <button class="meta" data-name="image" draggable="true">image</button>
        <!-- <button class="meta" data-name="radio" draggable="true">radio</button> -->
        <button class="meta" data-name="submit" draggable="true">submit</button>
      </div>
    </div>
    <div
      class="preview"
      style="width: 40%; border: 1px solid #ccc; margin: 0 10px;"
    >
      <p>编辑区还没想好怎么展示</p>
    </div>
    <div style="flex: 1; border: 1px solid #ccc; padding: 0 5px;overflow: scroll;">
      <custom-form :json="json"></custom-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(document.querySelector(".preview"));
    document.querySelector(".pans").addEventListener("dragstart", (e) => {
      console.log("dragstart", e);
      e.dataTransfer.setData("name", e.target.getAttribute("data-name"));
      console.log(e.target.getAttribute("data-name"));
    });
    document.querySelector(".preview").addEventListener("dragenter", (e) => {
      console.log("dragenter", e);
      e.preventDefault();
    });
    document.querySelector(".preview").addEventListener("dragover", (e) => {
      // 覆盖默认行为让元素可被放置
      e.preventDefault();
    });
    document.querySelector(".preview").addEventListener("drop", (e) => {
      console.log("drop", e);
      // 覆盖默认行为让元素可被放置
      e.preventDefault();
      const type = e.dataTransfer.getData("name");
      console.log(type);
      switch (type) {
        case "checkbox":
          this.json.push({
            name: "checkbox",
            type: "checkbox",
            label: "请输入label",
            value: false,
          });
          break;
        case "image":
          this.json.push({
            name: "image",
            imgUrl:
              "https://static001.geekbang.org/account/avatar/00/14/84/9e/05ed50dd.jpg",
          });
          break;
        case "submit":
          this.json.push({
            name: "input",
            type: "submit",
            value: "submit",
          });
          break;
        case "column":
          this.json.push({
            style: "display: flex;flex-direction: column;",
            children: [
              {
                label: "label: ",
                name: "input",
                type: "text",
                placeholder: "Enter Your Name...",
                value: "",
              },
              {
                name: "image",
                imgUrl:
                  "https://static001.geekbang.org/account/avatar/00/14/84/9e/05ed50dd.jpg",
              }
            ],
          });
          break;
        case "row":
          this.json.push({
            style: "display: flex;flex-direction: row;",
            children: [
              {
                label: "label: ",
                name: "input",
                type: "text",
                placeholder: "Enter Your Name...",
                value: "",
              },
              {
                name: "image",
                imgUrl:
                  "https://static001.geekbang.org/account/avatar/00/14/84/9e/05ed50dd.jpg",
              }
            ],
          });
          break;
        default:
          break;
      }
    });
  },
  data() {
    return {
      json: [
        // {
        //     name: 'input',
        //     type: 'text',
        //     placeholder: 'Enter Your Name...',
        //     value: ''
        // },
      ],
    };
  },
  methods: {
    inputChanged(v) {
      this.config.value = v;
    },
  },
};
</script>
