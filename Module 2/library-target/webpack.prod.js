const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, './index.js'),

    mode: 'production',
    // experiments: {
    //     outputModule: true
    // },
    output: {
        clean: true,
        library: {
            name: 'timeUtil',
            type: 'commonjs',
            // umdNamedDefine: false
            // type: 'commonjs2',
            // type: 'module'
        }
    }
}