const path = require("path");

// Require the framework and instantiate it
const fastify = require('fastify')({ 
    logger: {
        level: "info",
        file: path.join(__dirname, "logs/logs.txt"),
    }, 
})

// Declare a route
// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })
// 导入路由
fastify.register(require('./routers/index'));

//setup mongodb
fastify.register(require("./plugin/mongo"));


// 静态服务，类似于express.static
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, "public"),
    prefix: "/public/"
})


// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '192.168.182.67');
    console.log('serve listening port 3000!');
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()