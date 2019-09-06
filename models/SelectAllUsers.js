module.exports = (res) => {
var connexion = require('./mysqlConnexion')

connexion.query('SELECT * FROM `users`', function (err, users, fields) {
  if (err) throw err;
  res(users)
  });
}
