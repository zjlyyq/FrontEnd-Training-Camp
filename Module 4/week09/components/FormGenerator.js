import Vue from 'vue';

function childrenGenerator(h, json) {
  let children = [];
  for(let config of json) {
    console.log(config);
    if (config.name === 'input') {
      children.push(
        <custom-input config={config}></custom-input>
      )
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