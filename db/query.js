const db = require("../db/pool");

async function getAllMessages() {
   const { rows } = await db.query("SELECT * FROM board_messages");
   return rows;
}

async function getMessage(id) {
   const { rows } = await db.query("SELECT * FROM board_messages WHERE id = $1)", [id]);
   return rows;
}

async function createMessage({ username, text, added }) {
   await db.query("INSERT INTO board_messages (username, text, added) VALUES ($1, $2, $3)", [
      username,
      text,
      added,
   ]);
}

module.exports = {
   getAllMessages,
   getMessage,
   createMessage,
};
