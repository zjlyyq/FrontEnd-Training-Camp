const child_process = require('child_process');
const logger = require('./logger');

let a = 1;

if (process.send) {
    // process.send 存在说明是子进程
    // 子进程建立IPC管道，有send方法，父进程没有
    logger.log('子进程启动', process.pid);
    logger.log("子进程", a);
    process.on('exit', () => {
        logger.log('子进程退出', process.pid);
    })
} else {
    ++ a;
    // 主进程
    logger.log('主进程启动', process.pid);

    let child = child_process.fork(__filename);

    process.on('exit', () => {
        logger.log('主进程退出', process.pid);
    })
    // process.exit(); 
}