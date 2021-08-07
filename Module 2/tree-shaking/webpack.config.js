module.exports = [{
    entry: "./example.js",
    mode: "production",
    output: {
        clean: true,
        pathinfo: true,
        filename: "treeshaking.js",
        libraryTarget: "amd"
    },

    optimization: {
        usedExports: true,    
        mangleExports: false  // 不优化方法名
    }
},
{

}]