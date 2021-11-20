const path = require('path');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('hello world');
})

app.use(express.static('.'))


app.listen('8888', () => {
    console.log('Server listening in Port 8888...');
})