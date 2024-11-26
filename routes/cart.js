const express = require('express');
const router = express.Router();
const {cart,cart_products} = require("../controllers/cart");
router.route("/cart").get(cart).post(cart_products);
module.exports = router;