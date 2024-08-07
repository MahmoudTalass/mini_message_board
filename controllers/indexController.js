const db = require("../db/query");

async function listAllMessages(req, res) {
   const messages = await db.getAllMessages();
   res.render("index", { title: "Mini Messageboard", messages });
}

async function createMessageGet(req, res) {
   res.render("form", { title: "New Message Form" });
}

async function createMessagePost(req, res) {
   const { text, username } = req.body;
   await db.createMessage({ username, text });
   res.redirect("/");
}

async function getMessage(req, res) {
   const { id } = req.params;
   const message = await db.getMessage(id);
   res.render("message", { title: `Message by: ${message[0].username}`, message: message[0] });
}

module.exports = {
   listAllMessages,
   createMessageGet,
   createMessagePost,
   getMessage,
};
