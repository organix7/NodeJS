  var mysql = require('mysql')
  var sha1  = require('sha1')

  //CREATE THE DATABASE
  var create = mysql.createConnection({
    host: "localhost",
    user: "root"
  })

  create.query("CREATE DATABASE IF NOT EXISTS nodejs", function (err, result) {
    if (err) throw err;
  })

  //CONNECT TO THE DATABASE
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs'
  })

  connection.connect(function(err) {
    if (err) throw err;
  })

  //CREATE TABLE users IF NOT EXISTS with the root user
  connection.query(`CREATE TABLE IF NOT EXISTS users(
                          ID int primary key auto_increment,
                          Password text not null,
                          Mail varchar(30) not null)`,
                          (err,result)=>{
                            if (err) throw err;
                            connection.query(`INSERT INTO users (Mail, Password)
                                            SELECT 'root@security.be', '`+sha1("root")+`' AS tmp
                                            WHERE NOT EXISTS (
                                              SELECT Mail FROM users WHERE Mail = 'root@security.be'
                                            ) LIMIT 1`,(err, users, fields)=> { if (err) throw err })
                        })

  //CREATE TABLE message IF NOT EXISTS
  connection.query(`CREATE TABLE IF NOT EXISTS message(
                          Mail varchar(30) not null,
                          message text not null)`,
                          (err,result)=>{
                            if (err) throw err;
                          })

module.exports = connection
