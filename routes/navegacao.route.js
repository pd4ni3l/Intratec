const express = require('express')
/*
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db/intratec.db', function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log("Conectado ao banco")
});
*/

const router =  express.Router();

router.post('/navegacao', function( req, res){
    console.log(req.body.nome, req.body.url)
    let sql = 'INSERT INTO navbar (nome_url, url_url) VALUES (?, ?)'
    var params = [req.body.nome, req.body.url]
    db.run(sql, params, function(err, result){
    if (err){
        console.log('Xiii deu ruim' + err)
        return;
    }
    //console.log('Registro inserido ID: ' + this.lastID)
    res.status(200).redirect('index.html')
    })
})

module.exports = router;