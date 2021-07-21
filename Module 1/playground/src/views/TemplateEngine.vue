<template>
    <div>
    </div>
</template>

<script>
import { V1} from '../components/TemplateEngine'

export default {
    mounted() {
        const v1 = new V1().mounted(this.$el);
        v1.render(`<div>hello {{name}}</div>`, {name: 'zjl'});
    }
}
</script>