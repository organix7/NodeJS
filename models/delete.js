module.exports = (id,res) => {
var connexion = require('./mysqlConnexion')

connexion.query('DELETE FROM users WHERE id = ?',id, function (err, users, fields) {
  if (err) throw err;
  res.redirect('/users')
  });
}
