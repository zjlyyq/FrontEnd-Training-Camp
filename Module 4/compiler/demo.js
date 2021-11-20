const template = `<p title="Berwin" @click="c">1</p>`;

const compiler = require('vue-template-compiler');
// console.log(compiler(template));
console.log(compiler.compile(template).render)