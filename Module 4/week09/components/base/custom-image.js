import Vue from 'vue';

Vue.component('custom-image', {
  props: {
    config: {
      type: Object,
      default: {}
    }
  },
  render: function (h) {
    console.log('非函数式组件(JSX)实例：', this);
    return (
      <div>
        <img src={this.config.imgUrl} style="cursor: pointer;width: 100%;"/>
        { this.$slots.default }
      </div>
    )
  }
})