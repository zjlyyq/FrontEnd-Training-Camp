import VNode from './vnode';

export default class Engine2 {
    constructor() {
        this.nodes = new Map();
    }
    render(tmpl, data) {
        const re1 = /<(\w+)\s*([^>]*)>([^<]*)<\/\1>/gm; //匹配<div class="a">XXX</div>
        const re2 = /<(\w+)\s*([^(/>)]*)\/>/gm; //匹配<img src="a"/>
        tmpl = tmpl.replace(/\n/gm, "");
        while(re1.test(tmpl) || re2.test(tmpl)) {
            tmpl = tmpl.replace(re1, ($0, $1, $2, $3) => {
                let attr = this.parseAttribute($2);
                console.log($0, $1, $2, $3);
                const node = new VNode($1, attr, [], null, $3);
                this.nodes.set(node.uuid, node);
                return `(${node.uuid})`;
            })
            //<img src="a"/>类型
            tmpl = tmpl.replace(re2, (s0, s1, s2) => {
                let attr = this.parseAttribute(s2);
                let node = new VNode(s1, attr, [], null, "");
                this.nodes.set(node.uuid, node);
                return `(${node.uuid})`;
            });
        }
        // (kvp4hzv8.ldt)        
        let nodes = this.parseToNode(tmpl);
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
                    n.tag, 
                    n.attr, 
                    [], 
                    pnode, 
                    n.childrenTemplate
                );
                pnode.children.push(newnode);
                stack.push(newnode);
            })
        }

        return parent.children[0];
    }

    parseNodeToDom() {

    }

    parseAttribute(str) {
        str = str.trim();
        let attr = new Map();
        str.replace(/(\w+)\s*=['"](.*?)['"]/gm, (s0, s1, s2) => {
            attr.set(s1, s2);
            return s0;
        });
        return attr;
    }
}