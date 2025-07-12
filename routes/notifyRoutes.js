const express = require("express");
const router = express.Router();
const notifyController = require("../controllers/notifyController");

router.post("/signup", notifyController.sendNotification);

module.exports = router;
