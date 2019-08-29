const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db/intratec.db', function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log("Conectado ao banco")
});

db.serialize(function() {
    db.all("SELECT * FROM navbar;", function(err, rows) {
         console.log(err);
         console.log(rows);
    });
 });
db.close();