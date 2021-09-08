import Vue from 'vue';

Vue.component('custom-input', {
  props: {
    config: {
      type: Object,
      default: {}
    }
  },
  render: function (h) {
    console.log('非函数式组件(JSX)实例：', this);
    return (
      <div draggable="true" style="padding: 10px 0px;cursor: move;">
        { this.$slots.default }
      </div>
    )
  }
})