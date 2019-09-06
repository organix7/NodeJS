var express = require('express')
var signin = require('../models/signIn')
var router = express.Router()

/* POST signin page. */
router.post('/',(req,res) => {
  signin(res,req,req.body.mailIn,req.body.passwordIn)
})
/* GET signin page. */
router.get('/',(req,res) => {
  if(req.session.mail){
    req.session.destroy()
    res.redirect('/')
  }
  res.render("signin",{ title: 'Organix\'s site', activeSingIn: 'class=active'})
})

module.exports = router;
