const express  = require('express');
const router = express.Router();
const {deleteProduct,get} = require("../controllers/deleteProduct");
router.route('/deleteProduct').post(deleteProduct).get(get);
module.exports = router;
