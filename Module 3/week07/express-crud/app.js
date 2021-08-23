const path = require('path');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
let dbName = "todos";

const app = express();

async function getAllTodos() {
    // Use connect method to connect to the server
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    const collection = db.collection('todos')
    let todos = await collection.find().toArray();
    return todos;
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
        res.send('no todos!');
    }
})

app.listen('7777', () => {
    console.log('Server listening in Port 7777...');
})