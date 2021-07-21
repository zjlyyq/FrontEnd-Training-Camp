import VNode from './vnode';

export default class Engine2 {
    constructor() {
        this.nodes = new Map();
    }
    render(tmpl, data) {
        const re1 = /<(\w+)\s*([^>]*)>([^<]*)<\/\1>/gm; //匹配<div class="a">XXX</div>
        const re2 = /<(\w+)\s*([^(/>)]*)\/>/gm; //匹配<img src="a"/>
        tmpl = tmpl.replace(/[\n]/gm, "");
        while(re1.test(tmpl) || re2.test(tmpl)) {
            tmpl = tmpl.replace(re1, ($0, $1, $2, $3) => {
                let attr = this.parseAttribute($2);
                console.log($0, $1, $2, $3);
                const node = new VNode($1, attr, [], null, $3);
                this.nodes.set(node.uuid, node);
                return `(${node.uuid})`;
            })
            console.log(tmpl)
            //<img src="a"/>类型
            tmpl = tmpl.replace(re2, (s0, s1, s2) => {
                let attr = this.parseAttribute(s2);
                let node = new VNode(s1, attr, [], null, "");
                this.nodes.set(node.uuid, node);
                return `(${node.uuid})`;
            });
            console.log(tmpl)
        }
        // (kvp4hzv8.ldt)        
        let rootNode = this.parseToNode(tmpl);
        let dom = this.parseNodeToDom(rootNode, data);
        return dom;
    }

    parseToNode(template) {
        let re = /\((.*?)\)/g;
        let stack = [];
        let parent = new VNode("root", {}, [], null, template, null);  // 没看懂这句话有什么用
        stack.push(parent);
        while(stack.length > 0) {
            let pnode = stack.pop();
            let nodestr = pnode.childrenTemplate.trim();  // 实际上是取出子元素的UUID
            re.lastIndex = 0;
            [...nodestr.matchAll(re)].forEach(item => {
                let vnode = this.nodes.get(item[1]);
                let newnode = new VNode(
                    vnode.tag, 
                    vnode.attr, 
                    [], 
                    pnode, 
                    vnode.childrenTemplate
                );
                pnode.children.push(newnode);
                stack.push(newnode);
            })
        }

        return parent.children[0];
    }

    parseNodeToDom(root, data) {
        console.log(root, data);
        let fragment = document.createDocumentFragment();
        let stack = [[root, fragment, data]];
        
        //转成成node节点
        while(stack.length > 0) {
            let [pnode, pdom, scope] = stack.shift();
            // v-if 处理逻辑
            if (pnode.attr.get('v-if')) {
                let [prop, key] = pnode.attr.get('v-if').split('.');
                if (!scope[prop][key])
                    continue;
            }
            if (pnode.attr.get('for')) {
                // item in newsList
                let [key, prop] = pnode.attr.get("for").split("in");
                key = key.trim();
                prop = prop.trim();
                for (let item of data[prop]) {
                    let newnode = new VNode(
                        pnode.tag,
                        pnode.attr,
                        pnode.children,
                        pnode.parent,
                        pnode.childrenTemplate
                    )
                    let newscope = {};
                    newscope[key] = item;
                    let html = this.scopehtmlParse(newnode, data, newscope);
                    let ele = this.createElement(newnode, html);
                    this.scopeAtrrParse(ele, newnode, data, newscope);
                    pdom.appendChild(ele);
                    for(let child of newnode.children) {
                        stack.push([child, ele, newscope])
                    }
                }
            } else {
                let html = this.scopehtmlParse(pnode, data, scope);
                console.log(html)        
                let ele = this.createElement(pnode, html);
                this.scopeAtrrParse(ele, pnode, data, scope);
                pdom.appendChild(ele);
                for(let child of pnode.children) {
                    stack.push([child, ele, scope])
                }
            }
        }

        return fragment;
    }

    scopehtmlParse(node, globalScope, curentScope) {
        return node.childrenTemplate.replace(/\{\{(.*?)\}\}/g, (s0, s1) => {
            let props = s1.split(".");
            let val = curentScope[props[0]] || globalScope[props[0]];
            props.slice(1).forEach((item) => {
              val = val[item];
            });
            return val;
        });
    }

    scopeAtrrParse(ele, node, globalScope, curentScope) {
        console.log(node.attr);
        for (let [key, value] of node.attr) {
          let result = /\{\{(.*?)\}\}/.exec(value);
          if (result && result.length > 0) {
            let props = result[1].split(".");
            let val = curentScope[props[0]] || globalScope[props[0]];
            props.slice(1).forEach((item) => {
              val = val[item];
            });
            ele.setAttribute(key, val);
          }
        }
    }

    createElement(node, html) {
        let ignoreAttr = ["for", "click"];
        let dom = document.createElement(node.tag);
        for (let [key, val] of node.attr) {
            if (!ignoreAttr.includes(key)) {
                dom.setAttribute(key, val);
            }
        }
        if (node.children.length === 0) {
            dom.innerHTML = html;
        }
        return dom;
    }
    
    parseAttribute(str) {
        str = str.trim();
        let attr = new Map();
        str.replace(/(\w+-?\w+)\s*=['"](.*?)['"]/gm, (s0, s1, s2) => {
            attr.set(s1, s2);
            return s0;
        });
        return attr;
    }
}