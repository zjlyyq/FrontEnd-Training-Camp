// process.abort();

// 内存使用情况
console.log(process.memoryUsage());
let count = 0;
for(let i = 0;i < 1000000000;i ++){
    count ++;
}
console.log(count)

// process.uptime() 返回进程已运行事件
console.log(process.uptime());

// console.log(process.hrtime());

// console.log(process.execPath);
// console.log(process.platform);
// // process.stdout
// console.log(process.stdout);
// // process.stderr
// console.log(process.stderr);
// // process.stdin
// console.log(process.stdin);
// // process.argv
// console.log(process.argv);

// console.log(process.execPath);
// console.log(process.execArgv);
// console.log(process.env);

// process.on("exit", function (code) {
//   // 以下代码永远不会执行
//   setTimeout(function () {
//     console.log("该代码不会执行");
//   }, 0);

//   console.log("退出码为:", code);
// });
// console.log("程序执行结束");
