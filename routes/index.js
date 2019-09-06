var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res, next) => {
  if(req.session.mail){
    req.session.destroy()
    res.redirect('/')
  }

  res.render('index', { title: 'Organix\'s site', activeAcceuil: 'class=active'})
})

module.exports = router;
