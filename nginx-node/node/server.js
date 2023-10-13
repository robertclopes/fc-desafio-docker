'use strict';
 
const express = require('express');
const app = express();
 
const PORT = 3000;
const HOST = '0.0.0.0';

const mysql = require('mysql');
const config = {
    host: 'nn-db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

let sql = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255));`
let connection = mysql.createConnection(config);
connection.query(sql, function (err, rows, fields) {
    if (err)
        console.log(`ERRO: -> ${err}\nCode:${err.code}\nSQL:${err.sql}\n\n\n`);
});
connection.end();

app.get("/",(req, res)=>{
  let sql = `INSERT INTO people (name) VALUES ('Robert ${new Date().toISOString()}');`;
  let connection = mysql.createConnection(config);
  connection.query(sql, function (err, rows, fields) {
      if (err)
          console.log(`ERRO: -> ${err}\nCode:${err.code}\nSQL:${err.sql}\n\n\n`);
  });
  connection.query(`SELECT id,name FROM people`, function (err, rows, fields) {
      res.send({title:'Full Cycle Rocks!', data:rows});
      if(err)
      console.log('ERRO: ->' + err.code);
  });
  connection.end();
});
 
app.listen(PORT, HOST, () => {
  console.log(`Rodando em http://${HOST}:${PORT}`);
});




