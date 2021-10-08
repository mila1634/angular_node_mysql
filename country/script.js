var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'world_x'
});

connection.connect(function(error) {
    if(!!error) {
        console.log('Error');
    }
    else {
        console.log('Connected');
    }
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, resp) {
    connection.query("SELECT * FROM country", function(error, rows, fields) {
        if(!!error) {
            console.log('Error in the query');
        }
        else {
            console.log('Succes!\n');
            resp.send(rows);
            //console.log(rows.Name);
            //resp.send('country name: ' + rows[0].Name);
        }
    });
});

app.listen(1339);

