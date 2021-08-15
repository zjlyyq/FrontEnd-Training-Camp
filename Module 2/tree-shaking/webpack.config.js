module.exports = [
// tree-shaking 配置
{
    entry: "./example.js",
    mode: "development",
    output: {
        // clean: true,
        pathinfo: true,
        filename: "treeshaking.js",
        libraryTarget: "amd"
    },

    optimization: {
        usedExports: true,    
        mangleExports: false  // 不优化方法名
    }
},
// 不 tree-shaking 配置
{
    entry: "./example.js",
    mode: "development",
    output: {
        // clean: true,
        pathinfo: true,
        filename: "without.js",
        libraryTarget: "amd"
    },

    optimization: {
        usedExports: false,    
        mangleExports: false  // 不优化方法名
    }
}]