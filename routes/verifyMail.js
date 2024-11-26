const express = require('express');
const router = express.Router();
const {verifyMail} = require("../controllers/verifyMail")
router.route("/verify/:token").get(verifyMail);

router.route("/verify/:token/:redirectPage").get(verifyMail);

module.exports = router;