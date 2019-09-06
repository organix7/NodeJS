var express = require('express');
var router = express.Router();
var allUsers = require('../models/SelectAllUsers')

/* GET users listing. */
router.get('/', (req, res, next) => {
  if(!req.session.mail)
    res.redirect('/')
  else
  allUsers((users) => {
      res.render('Users',{title: 'Users',
                          activeUsers: 'class=active',
                          users: users,
                          session:req.session.mail
                        });
  })
});

module.exports = router;
