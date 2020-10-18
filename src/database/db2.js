const Database2 = require("sqlite-async");

function execute(db2) {
  return db2.exec(`
        CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            yourname TEXT,
            instname TEXT,
            whatsapp2 TEXT,
            about2 TEXT,
        );
    `);
}

module.exports = Database2.open(__dirname + "/database2.sqlite").then(
  execute
); /*.then(function(db) {}) se tiver */