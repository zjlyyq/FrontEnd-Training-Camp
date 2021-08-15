const crypto = require('crypto');

// md5 sha256
const hash = crypto.createHash('md5');
const hash2 = crypto.createHash('md5');

// 将数据传递给hash实例，可以多次调用
hash.update('a');
hash.update('b');
hash.update('c');
hash2.update("abc");

console.log(hash.digest("hex") === hash2.digest("hex"));   // true
