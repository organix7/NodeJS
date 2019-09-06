var express = require('express')
var router = express.Router()

/* GET about page. */
router.get('/',(req,res,next) => {
  res.render('About',{session:req.session.mail ,title: 'about', activeAbout: 'class=active'})
})

module.exports=router
