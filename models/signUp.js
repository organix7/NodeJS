module.exports = (res,req,mail,password) => {
var connexion = require('./mysqlConnexion')
var value = [mail,password]
var sha1 = require('sha1')

value[1] = sha1(value[1])
connexion.query('SELECT * FROM users WHERE Mail=?',value[0], function (err, users, fields) {
  if (err) throw err;

  if(!users.length){
    connexion.query('INSERT INTO users (Mail, Password) VALUES (?,?)',value, function (err, users, fields) {
      req.session.mail = value[0]
      if (err) throw err;
      res.redirect('users')
    });
  }
  else
    res.redirect('/')
  });

}
