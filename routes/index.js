const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/", indexController.listAllMessagesGet);

router.get("/new", indexController.createMessageGet);

router.post("/new", indexController.createMessagePost);

module.exports = router;
