import Vue from 'vue';

function childrenGenerator(h, json) {
  let children = [];
  for(let config of json) {
    console.log('config', config);
    if (config.name === 'input') {
      children.push(
        <custom-input config={config}></custom-input>
      )
    } 
    else if(config.name === 'image') {
      children.push(
        <custom-image config={config}></custom-image>
      )
    }
    else if(config.name === 'checkbox') {
      children.push(
        <custom-checkbox config={config}>
        </custom-checkbox>
      )
    } else {
      if (config.children && config.children.length > 0) {
        children.push(
          <div style={config.style}>
            {
              childrenGenerator(h, config.children)
            }
          </div>
        )
      } else {
        children.push(
          <div style={config.style}>
          </div>
        )
      }
    }
  }
  return children;
}

Vue.component('custom-form', {
  functional: true,
  render: (h, ctx) => {
    console.log(ctx);
    return h(
      'form',
      // 将 createElement 传入 generator 函数
      childrenGenerator(h, ctx.props.json)
    )
  }
})