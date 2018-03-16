require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const massive = require('massive');
const app = express();
const controller = require('./controller');
app.use(bodyParser.json())

massive(process.env.DATABASE_URI)
    .then(function (db) {
        const portChalk = chalk.cyan
        app.listen(3005, () => {console.log(portChalk('live on port 3005'));})
        console.log(chalk.magenta('database connected'))
        app.set('db', db) 
    });

app.get('/api/inventory', controller.getAll);
app.post('/api/add' , controller.addProduct);


