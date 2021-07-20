<template>
  <div></div>
</template>

<script>
import { V1 } from "../components/TemplateEngine";
import newsList from "../components/TemplateEngine/components/NewsList";
export default {
  data() {
    return {
        data: {
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
    };
  },
  mounted() {
    const v1 = new V1().mounted(this.$el);
    console.log(newsList.render())
    v1.render(newsList.render(), this.data);
  },
};
</script>