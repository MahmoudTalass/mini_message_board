async function listAllMessagesGet(req, res) {
   res.render("index", { title: "Mini Messageboard", messages });
}

async function createMessageGet(req, res) {
   res.render("form");
}

async function createMessagePost(req, res) {
   const formElements = req.body;

   const newMessage = {
      text: formElements.text,
      user: formElements.user,
      added: new Date(),
   };

   messages.push(newMessage);

   res.redirect("/");
}

module.exports = {
   listAllMessagesGet,
   createMessageGet,
   createMessagePost,
};
