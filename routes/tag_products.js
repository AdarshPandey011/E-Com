const express = require('express')
const router = express.Router();
const {tag_products,get} = require("../controllers/tag_products");
router.route("/products").post(tag_products).get(get)
module.exports = router
