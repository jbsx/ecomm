const express = require('express');
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');

const app = express();

let db = mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password: 'password',
    database:   'ecomm'
});

db.connect(err => {
    if (err){
        throw err;
    }
    console.log('connected');
});

app.get('/addproduct', (req, res)=>{
    let sql = `INSERT INTO products SET product_id=unhex(replace(uuid(), '-', '')), name = ?, price = ?, description = ?, img = ?`;
    let data = [
        'testing',              //name
        69,                     //price
        'gegegegegaegsdfgsd',   //description 
        '/logo192.png'          //image path
    ];
    let query = db.query(sql, data, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('created');
    })
});

app.get('/get', (req,res)=>{
    let sql = 'SELECT * FROM products';
    db.query(sql, (err, result)=>{
        if (err) throw err;
        res.send(result);
    });
});

app.listen('3300', () => {
    console.log('server listening on 3300');
});
