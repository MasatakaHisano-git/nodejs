/** Define const */
// express server
const express = require('express');
// body parser
const bodyParser = require('body-parser');
// Port
const PORT = 3000;
// express app
const app = express();

/** Setting PostgreSQL */
// Define client
var { Client } = require('pg')

// User info
var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432
})
// Connecting PostgreSQL
client.connect();

//
app.get('/', function (req, res) {
    var query = "select * from ;";
    res.send(query);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);