async function routes (fastify, options) {
    const db = fastify.mongo.db;
    
    fastify.get('/', async (request, reply) => {
      return { hello: 'world' }
    })

    fastify.get("/todo/query", async (request, reply) => {
      const collection = db.collection("todos");
      const result = await collection.find({});
      return { error: "", errorCode: 0, result };
    });
}
  
module.exports = routes