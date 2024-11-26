const express = require('express')
const router = express.Router();
const {forgotPassword,post} = require("../controllers/forgotPassword");
router.route("/forgotPassword").get(forgotPassword).post(post);
module.exports = router;