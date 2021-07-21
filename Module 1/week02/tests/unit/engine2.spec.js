import { shallowMount } from "@vue/test-utils"
import Engine2 from "../../src/components/TemplateEngine/engine2"
import NewsList from '../../src/components/TemplateEngine/components/NewsList'
describe("engine.js", () => {
    it("Engine2 render", () => {
        const engine = new Engine2();
        const htmlTmpl = NewsList.render();
        let dom = engine.render(
            htmlTmpl,
            { 
                newslist: [
                    {
                      image: "https://giant-img.oss-cn-shanghai.aliyuncs.com/bike/20210519/162141158818339.jpg@!giantWeb_Vehicle_Big.webp",
                      title: "t",
                    },
                    {
                      image: "http://giant-img.oss-cn-shanghai.aliyuncs.com/bike/20190521/155841791819391.jpg@!giantWeb_Vehicle_Big.webp",
                      title: "tt",
                    },
                    {
                      image: "https://giant-img.oss-cn-shanghai.aliyuncs.com/bike/20200114/157896860839302.jpg@!giantWeb_Vehicle_Big.webp",
                      title: "ttt",
                    },
                ],
            }
        );
        console.log(dom);
    });

    it("v-if test", () => {
      const engine = new Engine2();
      let tmpl = `<div class="newslist">
        <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
        <div class="date" v-if="info.showDate">{{info.name}}</div>
        <div class="img">{{info.name}}</div>
      </div>`;
      let dom = engine.render(
          tmpl,
          {
            image: "https://giant-img.oss-cn-shanghai.aliyuncs.com/bike/20210519/162141158818339.jpg@!giantWeb_Vehicle_Big.webp", 
            info: {showImage: true, showDate:false, name: "aaa"}
          }
      );
      console.log(dom);
  });

    it("Engine2 parseAttribute", () => {
        const attr = new Engine2().parseAttribute('class="app" style="color: red;"')
        console.log(attr);
    })
});