const express = require('express');

const router =  express.Router();

//console.log('Estou na navegação route');

router.post('/post', function( req, res){
    console.log('Entrei no post da navegação');
    console.log(req.body.nome, req.body.url);
    let sql = 'INSERT INTO navbar (nome_url, url_url) VALUES (?, ?)'
    var params = [req.body.nome, req.body.url]
    db.run(sql, params, function(err, res){
    if (err){
        console.log('Xiii deu ruim' + err);
        return;
    }
    //console.log('Registro inserido ID: ' + this.lastID)
    res.status(200).redirect('index.html');
    })
})

module.exports = router;