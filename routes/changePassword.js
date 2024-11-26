const express = require("express");
const router = express.Router();
const {changePassword,post} = require("../controllers/changePassword");
router.route("/changePassword").get(changePassword).post(post);
module.exports = router;