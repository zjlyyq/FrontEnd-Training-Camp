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
        <div>
          <input
            value={this.config.value}
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

Vue.component('functional-input', {
  functional: true,
  
  props: {
    config: {
      type: Object,
      default: {}
    }
  },

  render: function (h, context) {
    console.log('函数式组件实例：', context);
    return <div draggable="true" style="padding: 10px 0px;cursor: move;">
      <input
        value={context.props.config.value}
        type={context.props.config.type} 
        placeholder={context.props.config.placeholder} 
        class={'fun_inout'}
        style={'border: 1px solid #ccc;;line-height: 32px;padding: 0px 12px; width: 100%;box-sizing: border-box'}
      />
      { context.children }
    </div>
  }
})