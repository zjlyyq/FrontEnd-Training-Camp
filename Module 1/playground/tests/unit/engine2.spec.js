import { shallowMount } from "@vue/test-utils"
import Engine2 from "../../src/components/TemplateEngine/engine2"
import NewsList from '../../src/components/TemplateEngine/components/NewsList'
describe("engine.js", () => {
    it("Engine2 render", () => {
        const engine = new Engine2();
        const htmlTmpl = NewsList.render();
        let nodes = engine.render(
            htmlTmpl,
            { 
                newsList: [
                    {
                        image: 'a',
                        title: 't'
                    },
                    {
                        image: 'b',
                        title: 'tt'
                    },
                    {
                        image: 'c',
                        title: 'ttt'
                    }
                ] 
            }
        );
    });

    it("Engine2 parseAttribute", () => {
        const attr = new Engine2().parseAttribute('class="app" style="color: red;"')
        console.log(attr);
    })
});