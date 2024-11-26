
const express = require('express');
const router = express.Router();
const {getAllProducts,getSomething} = require("../controllers/products"); 

router.route('/').get(getAllProducts);
router.route('/home').get(getSomething);

module.exports = router;