import Vue from 'vue';

Vue.component('custom-checkbox', {
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
        <div>
          <label>{this.config.label}</label>
          <input
            value={this.config.value}
            type={'checkbox'}
            style={'border: 1px solid #ccc;;line-height: 32px;padding: 0px 12px;'}
          />
        </div>
        { this.$slots.default }
      </div>
    )
  }
})