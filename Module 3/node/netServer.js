let net = require("net");
let PORT = 8081;
let HOST = "localhost";
/**
 * 1. 创建一个TCP服务器实例，调用listen函数开始监听指定端口；
 * 2. 传入net.createServer()的回调函数，作为connection事件的处理函数；
 * 3. 在每个connection事件中，该回调函数接收到的socket对象是唯一的；
 * 4. 该连接自动关联一个socket对象
 * */
let server = net.createServer((socket) => {
  // 为这个socket实例添加一个“data”事件处理函数
  socket.on("data", (data) => {
    console.log("DATA" + socket.remoteAddress + ":" + data);
    socket.write('You said "' + data + '"\r\n'); // 向客户端回发该数据
  });

  socket.on("end", () => {
    console.log("客户端关闭");
    /**
     * 服务端收到客户端发出的关闭连接请求时，会触发end事件
     * 这个时候客户端没有真正的关闭，只是开始关闭；
     * 当真正的关闭的时候，会触发close事件；
     * */
    server.unref();
    //调用了该方法，则所有的客户端关闭跟本服务器的连接后，将关闭服务器
  });

  // 客户端关闭事件
  socket.on("close", () => {
    console.log("CLOSED: " + socket.remoteAddress + " " + socket.remotePort);
  });

  /*socket.pause()
	socket.setTimeout(3000) //设置客户端超时时间，如果客户端一直不输入，超过这个时间，就认为超时了
	socket.on('timeout', () => {
		console.log('超时了')
		socket.pipe(ws, {end: false})
		// 默认情况下，当可读流读到末尾的时候会关闭可写流
	})*/
});

server.on("connection", (socket) => {
  console.log("CONNECTED: " + socket.remoteAddress + ":" + socket.remotePort);
});

server.listen(PORT, HOST, () => {
  console.log("服务端的地址是：", server.address());
});

server.on("error", (err) => {
  console.log(err);
});

server.on("close", () => {
  //关闭服务器，停止接收新的客户端的请求
  console.log("close事件：服务端关闭");
});

server.on("error", (error) => {
  console.log("error事件：服务端异常：" + error.message);
});