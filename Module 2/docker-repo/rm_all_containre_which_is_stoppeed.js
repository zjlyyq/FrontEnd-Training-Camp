/**
 * 删除所有已停止的docker容器
 */


const cp = require('child_process');

cp.exec('docker ps -a', (error, stdout, stderr) => {
    if (error) {
        console.log(error);
        return;
    }
    if (stdout) {
        // 输出结果第一行是说明行， 如下
        // CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
        // 需要去除
        let lines = stdout.split('\n').slice(1);
        if (lines.length === 0 || lines[0].length === 0) {
            console.log('没有容器可供删除。。。');
            return;
        }
        lines.forEach(line => {
            // 取出容器id
            const containId = line.split(/\s+/)[0];
            if (containId) {
                // 运行 docker rm containerId 删除
                cp.exec('docker rm -f' + containId, (error, stdout) => {
                    console.log('成功删除id为' + containId + '的容器');
                });
            }
        })
    }
});
