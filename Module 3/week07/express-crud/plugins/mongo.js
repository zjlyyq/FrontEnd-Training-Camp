/**
 * 本文件暴露mongodb数据库的CRUD操作
 */
const MongoClient = require('mongodb').MongoClient;

async function getAllTodos() {
    // Connection URL
    const url = 'mongodb://admin001:admin123@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=admin';
    const client = new MongoClient(url);
    let dbName = "todos";
    
    // Use connect method to connect to the server
    await client.connect()
    console.log(`Connected successfully to db: ${dbName}`);
    const db = client.db(dbName)
    // db.aut
    const collection = db.collection('todos')
    let todos = await collection.find().toArray();
    return todos;
}

async function getAllUsers() {
    // Connection URL
    const url = 'mongodb://root:mongodb@localhost:27017/?authMechanism=SCRAM-SHA-256';
    const client = new MongoClient(url);
    let dbName = "admin";
    
    // Use connect method to connect to the server
    await client.connect()
    console.log(`Connected successfully to db: ${dbName}`);
    const db = client.db(dbName)
    const collection = db.collection('system.users')
    let users = await collection.find().toArray();
    return users;
}

async function getAllAnimals() {
    // Connection URL
    const url = 'mongodb://master:master!123@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=animals';
    const client = new MongoClient(url);
    let dbName = "animals";
    
    // Use connect method to connect to the server
    await client.connect()
    console.log(`Connected successfully to db: ${dbName}`);
    const db = client.db(dbName)
    const collection = db.collection('animals')
    let animals = await collection.find().toArray();
    return animals;
}


module.exports = {
    getAllTodos, getAllAnimals, getAllUsers
}