
const express = require('express');
const router = express.Router();
const {post} = require("../controllers/razorPay"); 

router.route('/razorPay').post(post);


module.exports = router;