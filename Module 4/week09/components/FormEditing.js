import Vue from 'vue';

function childrenGenerator(h, json) {
  let children = [];
  for(let config of json) {
    console.log('config', config);
    if (config.name === 'input') {
      children.push(
        <editor-input config={config}></editor-input>
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

Vue.component('editing-form', {
  functional: true,
  render: (h, ctx) => {
    return h(
      'div',
      // 将 createElement 传入 generator 函数
      childrenGenerator(h, ctx.props.json)
    )
  }
})