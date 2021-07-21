<template>
  <div></div>
</template>

<script>
import { V1 } from "../components/TemplateEngine";
import newsList from "../components/TemplateEngine/components/NewsList";
import KBC083 from '../assets/KBC083.png'
import BYA412E from '../assets/BYA412E.png'
import BYA412 from '../assets/BYA412.png'
export default {
  data() {
    return {
        data: {
            newslist: [
              {
                image: KBC083,
                title: "DAHON经典款Speed P8，外观流畅、时尚。无论是休闲运动旅行，P8都能让您随心所欲！采用了DAHON专利4130 Cr-Mo铝合金车架，人体力学手把，使您在骑行的过程中舒适。2015年度P8继续沿用了方便的Dahon™ Zorin Pospump打气筒座管、速联X7变速系统和锻造型铝合金曲柄/ CNC车削链盘，升级了意大利Selle Royal VIENTO座垫等，提高您在骑行过程中的舒适体验！",
              },
              {
                image: BYA412E,
                title: "大行经典BYA412的电动版，搭配高碳钢前叉，一体轮设计符合了不同性别的需求，外观小巧舒适，通勤更有趣",
              },
              {
                image: BYA412,
                title: "DAHON 2018款BYA 412（白鸽）外型小巧，更小的折叠尺寸满足不同身高体型的人员的通勤需求。升级的意大利Selle Royal定制人体力学座垫，KMC不锈钢链条和Formula铝合金连体飞后花鼓，确保了车身更加舒适性和轻量化！",
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

