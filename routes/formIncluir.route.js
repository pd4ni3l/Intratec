const express = require('express')
const { check, oneOf, validationErrors } = require('express-validator');

const router =  express.Router();

router.get('/', function(req, res){
   res.render('formincluir');
});

router.post('/post', function(req, res) {
   let nome = req.body.nome;
   let url = req.body.url;
   console.log('nome: ', +nome, ' URL: ', +url)
   check('nome', 'Falta nome').exists();
   

   //req.checkBody('nome', 'Nome é requerido is required').notEmpty();
   //req.checkBody(req.body.url, 'URL é requerido').notEmpty();

   var errors = req.validationErrors();
   if(errors){
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/formincluir');
   }
   else{
      req.session.success = true;
      res.redirect('/');
   } 
});

module.exports = router;