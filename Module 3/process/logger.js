const fs = require('fs');
const path = require('path');

// 生成writeStream
function createWriteStream(fileName) {
    const fullFileName = path.resolve(__dirname, fileName);
    const writeStream = fs.createWriteStream(fullFileName, {
        flags: "a" // 'a'为追加，'w'为覆盖
    });
    return writeStream;
}

const writeStream = createWriteStream("debug.log");
writeStream.on('close', () => {
    console.log('流关闭')
})
// 日期时间格式化
const formater = new Intl.DateTimeFormat("zh-cn", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    second: "2-digit",
});

function log() {
    // console.log('arguments', ...arguments);
    let logs = [...arguments].join(",");
    let fullLog = `${formater.format(new Date())} [${process.pid}]: ${logs}\n`;
    try {
        writeStream.write(fullLog);
    } catch (error) {
        console.log(error)
    }
    console.log(fullLog);
}

module.exports = {
    log,
};
