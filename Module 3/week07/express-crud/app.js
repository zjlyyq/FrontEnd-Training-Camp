const path = require('path');
const express = require('express');
const { getAllAnimals, getAllTodos, getAllUsers } = require('./plugins/mongo');

const app = express();
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
app.get('/animals', async (req, res) => {
    try {
        let todos = await getAllAnimals();
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