const express = require('express')
const { check, validationResult } = require('express-validator');

const router =  express.Router();

router.get('/', function( req, res){
   res.render('formincluir');
});

//router.post('/post',[  check('nome').isEmpty().withMessage('Nome não pode ser nulo') ], function(req, res) {
router.post('/post',[ check('url', 'URL vazio').isURL(), check('nome', 'Nome vazio') ] ,function(req, res, next) {

   // Check Erros
   //console.log('NOME: ', req.body.nome, 'URL: ', req.body.url);
   //let nome = req.body.nome;
   //let url = req.body.url;
   // check('nome', 'Nome vazio').isEmpty()
   //check('url', 'URL vazio').isEmpty()
   const errors = validationResult(req);
   //var temErros = JSON.parse(errors)
   console.log(errors)
   if(errors.value == null ){
      console.log('ERROS: ', errors)
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/formincluir');
   }
   else{
      req.session.success = true;
      console.log('TUDO CERTO!!???', errors)
      res.redirect('/');
   } 
});

module.exports = router;