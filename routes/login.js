const express = require('express')
const router = express.Router();
const {login,get} = require("../controllers/login")
router.route('/login').post(login).get(get);
module.exports = router;