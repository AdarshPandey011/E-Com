const express = require('express');
const router = express.Router();
const {addToCart,get} = require("../controllers/addToCart");
router.route('/addToCart').post(addToCart).get(get);
module.exports = router;