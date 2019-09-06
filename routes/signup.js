var express = require('express')
var signup = require('../models/signUp')
var router = express.Router()

/* GET signup page. */
router.get('/',(req,res) => {
  req.session.destroy()
  res.redirect('/')
})

/* POST signup page. */
router.post('/',(req,res) => {
  signup(res,req,req.body.mailUp,req.body.passwordUp)
})

module.exports = router;
