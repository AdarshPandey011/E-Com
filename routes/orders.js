const express = require('express')
const router = express.Router();
const {post} = require("../controllers/orders")
router.route('/orders').post(post);
module.exports = router;