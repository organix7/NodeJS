module.exports = (res,req,mail,password) => {
var connexion = require('./mysqlConnexion')
var value = [mail,password]
var sha1 = require('sha1')

value[1] = sha1(value[1])

connexion.query('SELECT * FROM users WHERE Mail=? AND Password=?',value, function (err, users) {
  if (err) throw err

  else if(!users.length)
  {
    res.render("signin",{title:"log in",activeSingIn:"class=active",bad:"Bad email or password"})
  }
  else{
    req.session.mail = value[0]
    res.redirect("users")
  }
  });
}
