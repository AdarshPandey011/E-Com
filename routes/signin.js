const express = require('express')
const router = express.Router();
const {signin,get} = require("../controllers/signin")
// const get = require("../controllers/get")//added
router.route('/signin').post(signin);
router.route('/signin').get(get)//added
module.exports = router;