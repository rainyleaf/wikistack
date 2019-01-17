const morgan = require('morgan');
const express = require('express');
//const Sequelize = require('sequelize');
const layout = require('./views/layout')
//const db = new Sequelize('')

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(layout(''));
});

app.listen(3000, 'localhost', () => console.log('listening at port 3000'));
