const express  = require('express');
const router = express.Router();
const {changeQuantity,get} = require("../controllers/changeQuantity");
router.route('/changeQuantity').post(changeQuantity).get(get);
module.exports = router;
