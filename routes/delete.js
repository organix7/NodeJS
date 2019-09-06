var express = require('express')
var del = require('../models/delete')
var router = express.Router()

/* GET delete page. */
router.get('/:id',(req,res) => {
  if(req.session.mail!=="root@security.be")
    res.redirect('/')
  else
    del(req.params.id,res)
})

module.exports = router;
