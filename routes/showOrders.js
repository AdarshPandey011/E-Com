
const express = require('express');
const router = express.Router();
const {post} = require("../controllers/showOrders"); 

router.route('/showOrders').post(post);

module.exports = router;