import VNode from './vnode';

export default class Engine2 {
    render(tmpl, data) {
        const re1 = /<(\w+)\s*([^>]*)>([^<]*)<\/\1>/gm; //匹配<div class="a">XXX</div>
        const re2 = /<(\w+)\s*([^(/>)]*)\/>/gm; //匹配<img src="a"/>
        tmpl = tmpl.replace(/[\s|\n]/gm, "");
        while(re1.test(tmpl) || re2.test(tmpl)) {
            tmpl = tmpl.replace(re1, ($0, $1, $2, $3) => {
                let attr = this.parseAttribute($2);
                console.log($0, $1, $2, $3)
                const node = new VNode($1, attr, [], null, $3);
                return `(${node.uuid})`;
            })
            console.log(tmpl)
            //<img src="a"/>类型
            tmpl = tmpl.replace(re2, (s0, s1, s2) => {
                let attr = this.parseAttribute(s2);
                let node = new VNode(s1, attr, [], null, "");
                // this.nodes.set(node.uuid, node);
                return `(${node.uuid})`;
            });
        }
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