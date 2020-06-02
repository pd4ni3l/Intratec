const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('db/intratec.db', function(err){
    if (err) {
        console.log(err);
        return;
    }
    console.log("Controller conectado ao banco");
});

module.exports = db;