const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, './index.js'),

    mode: 'development',
    // experiments: {
    //     outputModule: true
    // },
    devtool: false,
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