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
router.get('/ok', function( req, res){
   res.render('formincluir', {success: req.session.success, errors: req.session.errors });
   req.session.errors = null;
});

router.post('/post',[ check('url').isURL(), check('nome').isAlpha() ], function(req, res) {
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
      db.close;
      let success = 'Registro inserido';
      req.session.success = params;
      res.redirect('/formincluir/ok');
      })
   }
});

 router.get('/listar', (req, res) => {
      db.serialize(function(){
          db.all("SELECT id_nav, nome_url, url_url FROM navbar ORDER BY nome_url;", function(err, rows){
              if (err) {
                  console.log('Droga aconteceu algum erro' + err)
                  //throw err;
              }
              else{
               //console.log(rows)
               req.session.listar = rows;
               //console.log(req.session.listar)
               res.render('formincluir', { listar: req.session.listar });
               //res.json(rows)
              }    
          })
      });
   });

module.exports = router;