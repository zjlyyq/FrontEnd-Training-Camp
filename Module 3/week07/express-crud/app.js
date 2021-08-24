const path = require('path');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

async function getAllTodos() {
    // Connection URL
    const url = 'mongodb://admin001:admin123456@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=todos';
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
    const url = 'mongodb://root:password@localhost:27017/?authMechanism=SCRAM-SHA-256';
    const client = new MongoClient(url);
    let dbName = "admin";
    
    const app = express();
    // Use connect method to connect to the server
    await client.connect()
    console.log(`Connected successfully to db: ${dbName}`);
    const db = client.db(dbName)
    const collection = db.collection('system.users')
    let users = await collection.find().toArray();
    return users;
}
app.get('/', (req, res) => {
    res.send('hello world');
})

app.use(express.static('public'))

app.get('/imageGetter', (req, res) => {
    res.download(path.resolve(__dirname, './public/images/MERIDA.jpg'));
})

app.get('/doc', (req, res) => {
    res.download(path.resolve(__dirname, './public/images/40丨MongoDB上线及升级.mp4'));
})

app.get('/todos', async (req, res) => {
    try {
        let todos = await getAllTodos();
        res.send(todos);
    } catch (error) {
        console.log(error)
        res.send('no todos!');
    }
})

app.get('/users', async (req, res) => {
    try {
        let users = await getAllUsers();
        res.send(users);
    } catch (error) {
        console.log(error)
        res.send('no users!');
    }
})

app.listen('7777', () => {
    console.log('Server listening in Port 7777...');
})