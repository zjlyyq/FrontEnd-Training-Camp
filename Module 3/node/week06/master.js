const child_process = require('child_process');
const numCPUs = require("os").cpus().length;
const net = require('net');

const server = net.createServer();
const workers = {};

function createWorker() {
    let worker = child_process.fork('./child.js');
    worker.on('exit', function() {
        console.log('exit:', arguments);
        delete workers[worker.pid];
        createWorker();
    })
    worker.send('server',  server);
    workers[worker.pid] = worker;
}
server.listen(8888, () => {
    console.log('listening port 8888!');
    for(let i = 0;i < numCPUs;i ++) {
       createWorker();
    }
    server.close();
})

process.on('exit', () => {
    for(let pid in workers) {
        workers[pid].kill();
    }
})

