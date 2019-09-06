module.exports = (req,res) => {
var connexion = require('./mysqlConnexion')

connexion.query('SELECT * FROM `message`', function (err, messages, fields) {
  if (err) throw err;
  if(!req.session.mail)
    res.redirect('/')
  res.render('chat',{session:req.session.mail ,title: 'chat', activeChat: 'class=active', messages:messages})
  });
}
