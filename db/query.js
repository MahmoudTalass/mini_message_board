const pool = require("./pool");

async function getAllMessages() {
   const { rows } = await pool.query("SELECT * FROM board_messages");
   return rows;
}

async function getMessage(id) {
   const { rows } = await pool.query("SELECT * FROM board_messages WHERE id = $1", [id]);
   return rows;
}

async function createMessage({ username, text }) {
   await pool.query("INSERT INTO board_messages (username, text) VALUES ($1, $2)", [
      username,
      text,
   ]);
}

module.exports = {
   getAllMessages,
   getMessage,
   createMessage,
};
