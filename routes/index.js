const express = require("express");
const router = express.Router();

const messages = [
   {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
   },
   {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
   },
];

/* GET home page. */
router.get("/", (req, res, next) => {
   res.render("index", { title: "Mini Messageboard", messages });
});

router.get("/new", (req, res, next) => {
   res.render("form");
});

router.post(
   "/new",
   (req, res, next) => {
      const formElements = req.body;

      const newMessage = {
         text: formElements.text,
         user: formElements.user,
         added: new Date(),
      };

      messages.push(newMessage);

      next();
   },
   (req, res, next) => {
      res.redirect("/");
   }
);

module.exports = router;
