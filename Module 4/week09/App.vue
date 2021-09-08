<template>
    <div>   
        <!-- <input-awesome :config="config" @change="inputChanged">
            <button>submit</button>
        </input-awesome>
        <br>
        <custom-input :config="config2">
            <button>submit</button>
        </custom-input>
        <br>
        <functional-input :config="config3" data-name="functional-component" data-class="functional" a="a">
        
        </functional-input>
        <functional-input :config="config3" data-name="functional-component" data-class="functional" a="a">
            <button>submit</button>
        </functional-input> -->
        <custom-form :json="json"></custom-form>
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
