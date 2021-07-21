<template>
  <div></div>
</template>

<script>
import { V1 } from "../components/TemplateEngine";
import BYA412 from '../assets/BYA412.png'
export default {
  mounted() {
    const v1 = new V1().mounted(this.$el);
    let tmpl = `<div class="newslist">
        <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
        <div class="date" v-if="info.showDate">{{info.name}}</div>
        <div class="img">{{info.name}}</div>
    </div>`;
 
    v1.render(tmpl, {
        image: BYA412, 
        info: {showImage: true, showDate:false, name: "aaa"}
    })
  },
};
</script>

