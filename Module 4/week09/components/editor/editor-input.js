import Vue from 'vue';

Vue.component('editor-input', {
  props: {
    config: {
      type: Object,
      default: {}
    }
  },
  render: function (h) {
    return (
      <div draggable="true" style="padding: 10px 0px;cursor: move;">
        <div>
          <input type="text" placeholder="请输入label" name="label" onchange={ (e) => this.change('label',e.target.value) }/>
          <input
            value={this.config.value}
            type={this.config.type} 
            placeholder={this.config.placeholder} 
            style={'border: 1px solid #ccc;;line-height: 32px;padding: 0px 12px;'}
          />
        </div>
      </div>
    )
  },
  methods: {
    // 通知父组件更新congig
    change(k, v) {
      this.$emit('change', { [k]: v })
    }
  }
})