const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/", indexController.listAllMessages);

router.get("/new", indexController.createMessageGet);

router.post("/new", indexController.createMessagePost);

router.get("/message/:id", indexController.getMessage);

module.exports = router;
