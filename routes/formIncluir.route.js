const express = require('express');
const hbs = require('express-hbs');

const { check, validationResult } = require('express-validator');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db/intratec.db', function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log("Conectado ao banco")
});

const router =  express.Router();

router.get('/', function( req, res){
   res.render('formincluir');
});
router.get('/err', function( req, res){
   res.render('formincluir', {success: req.session.success, errors: req.session.errors });
   req.session.errors = null;
});
router.post('/post',[ check('url').isURL(), 
                      check('nome').isAlpha() ], function(req, res, next) {
   //const errors = validationResult(req);
   //if(!errors.isEmpty()){
   if(req.body.nome == '' && req.body.url == ''){
      let errors = 'Falta nome e URL';
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/formincluir/err');
   }
   else if (req.body.url == '' && req.body.nome != ''){
      let errors = 'Falta url';
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/formincluir/err');
   }
   else if (req.body.url != '' && req.body.nome == ''){
      let errors = 'Falta nome';
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/formincluir/err');
   }
   else{
      req.session.success = true;
      //console.log('ELSE.....', errors)
      console.log('Entrei no post sucesso');
      console.log(req.body.nome, req.body.url)
      let sql = 'INSERT INTO navbar (nome_url, url_url) VALUES (?, ?)'
      var params = [req.body.nome, req.body.url]
      
      db.run(sql, params, function(err, resp){
      if (err){
          console.log('Xiii deu ruim' + err)
          return;
      }
      //console.log('Registro inserido ID: ' + this.lastID)
      //res.status(200).redirect('/');
      db.close;
      res.redirect('/');
      })
      //res.redirect('/navega/post' )
   } 
});

module.exports = router;