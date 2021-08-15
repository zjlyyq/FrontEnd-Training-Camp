var fs = require("fs");
var path = require("path");

setImmediate(() => {
  console.log("setImmediate1");
});

setImmediate(() => {
  console.log("setImmediate2");
});

console.log("normal");

setTimeout(() => {
  console.log("timeout after 2");
}, 2);

setTimeout(() => {
  console.log("timeout after 10");
}, 10);

// for(let i = 0;i < 100000;i ++){
//     continue;
// }
process.nextTick(() => {
  console.log("nextTick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});