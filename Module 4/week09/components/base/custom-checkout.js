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
      <div>
        <div>
          <input
            type={this.config.type} 
            placeholder={this.config.placeholder} 
            style={'border: 1px solid #ccc;;line-height: 32px;padding: 0px 12px; width: 100%;box-sizing: border-box'}
          />
        </div>
        { this.$slots.default }
      </div>
    )
  }
})