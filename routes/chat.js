var express = require('express')
var router = express.Router()
var chat = require('../models/chat.js')

/* GET about page. */
router.get('/',(req,res,next) => {
 chat(req,res)
})

module.exports=router
