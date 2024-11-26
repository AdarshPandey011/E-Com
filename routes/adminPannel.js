const express = require('express');
const router = express.Router();
const {adminPannel} = require("../controllers/adminPannel");
router.route("/adminPannel").get(adminPannel)
module.exports = router;