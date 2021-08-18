const child_process = require('child_process');
const numCPUs = require("os").cpus().length;
const net = require('net');

const server = net.createServer();

server.listen(8888, () => {
    console.log('listening port 8888!');
    for(let i = 0;i < numCPUs;i ++) {
        let child = child_process.fork('./child.js');
        console.log(typeof(child));
        child.send('server',  server);
    }
    server.close();
})

