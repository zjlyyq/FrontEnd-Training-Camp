import Engine from './engine2';

export default class TemplateV1 {
  constructor() {
    this.root = null;
    this.engine = new Engine();
  }

  render(tmpl, data) {
    let dom = this.engine.render(tmpl, data);
    console.log("html>>>", dom);
    // this.root.appendChild(dom);
  }

  mounted(dom) {
    this.root = dom;
    return this;
  }
}
