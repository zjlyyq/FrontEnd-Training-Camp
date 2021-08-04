const { type } = require('os');
const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, './index.js'),

    mode: 'development',
    // experiments: {
    //     outputModule: true
    // },
    output: {
        clean: true,
        library: {
            name: 'timeUtil',
            type: 'jsonp',
            // umdNamedDefine: false
            // type: 'commonjs2',
            // type: 'module'
        }
    }
}