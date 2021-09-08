<template>
    <div class="container" style="display: flex; height: 100%;">
        <div class="pans" style="width: 30%; border: 1px solid #ccc;">
            <button data-name="input" draggable="true">input</button>
            <button data-name="checkbox" draggable="true">checkbox</button>
            <button data-name="button" draggable="true">button</button>
            <button data-name="image" draggable="true">image</button>
            <button data-name="radio" draggable="true">input</button>
        </div>
        <div class="preview" style="width: 40%;border: 1px solid #ccc;margin: 0 10px;"></div>
        <div style="flex: 1;border: 1px solid #ccc;padding: 0 5px;">
            <custom-form :json="json"></custom-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            config: {
                type: 'text',
                placeholder: 'Enter Your Name...',
                value: ''
            },
            config2: {
                type: 'number',
                placeholder: 'Enter Your Age...',
                value: '123456'
            },
            config3: {
                type: 'password',
                placeholder: 'Enter Your password...',
                value: '123456'
            },
            json: [
                {
                    name: 'input',
                    type: 'text',
                    placeholder: 'Enter Your Name...',
                    value: ''
                },
                {
                    name: 'input',
                    type: 'number',
                    placeholder: 'Enter Your Age...',
                    value: ''
                },
                {
                    name: 'checkout',
                    type: 'number',
                    placeholder: 'Enter Your Age...',
                    value: ''
                },
            ]
        }
    },
    methods: {
        inputChanged(v) {
            this.config.value = v;
        }
    }
}
</script>


