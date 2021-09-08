<template>
    <div class="container" style="display: flex; height: 100%;">
        <div class="pans" style="width: 30%; border: 1px solid #ccc;">
            <button class="meta" data-name="input" draggable="true">input</button>
            <button class="meta" data-name="checkbox" draggable="true">checkbox</button>
            <button class="meta" data-name="button" draggable="true">button</button>
            <button class="meta" data-name="image" draggable="true">image</button>
            <button class="meta" data-name="radio" draggable="true">input</button>
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
    mounted() {
        document.querySelector('.pans').addEventListener('dragstart', e => {
            console.log('dragstart', e);
            e.dataTransfer.setData('name', 
                e.target.getAttribute('data-name')
            )
            console.log(e.target.getAttribute('data-name'))
        })
        document.querySelector('.preview').addEventListener('dragenter', e => {
            console.log('dragenter', e);
            e.preventDefault();
        })
        document.querySelector('.preview').addEventListener('dragover', e => {
            // 覆盖默认行为让元素可被放置
            e.preventDefault();
        })
        document.querySelector('.preview').addEventListener('drop', e => {
            console.log('drop', e);
            // 覆盖默认行为让元素可被放置
            e.preventDefault();
            const type = e.dataTransfer.getData('name');
            console.log(type)
            switch(type) {
                case 'inout':
                    this.json.push(
                        {
                            name: 'input',
                            type: 'text',
                            placeholder: 'Enter Your Name...',
                            value: ''
                        }
                    )
                    break;
                default:
                    this.json.push(
                        {
                            name: 'input',
                            type: 'text',
                            placeholder: 'Enter Your Name...',
                            value: ''
                        }
                    )
            }
        })
    },
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
                // {
                //     name: 'input',
                //     type: 'text',
                //     placeholder: 'Enter Your Name...',
                //     value: ''
                // },
                // {
                //     name: 'input',
                //     type: 'number',
                //     placeholder: 'Enter Your Age...',
                //     value: ''
                // },
                // {
                //     name: 'checkout',
                //     type: 'number',
                //     placeholder: 'Enter Your Age...',
                //     value: ''
                // },
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


