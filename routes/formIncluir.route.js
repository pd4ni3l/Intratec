const express = require('express')
const { check, getValidationResult } = require('express-validator');

const router =  express.Router();

router.get('/', function(req, res){
   res.render('formincluir');
});

router.post('/post',[  check('nome').isEmpty().withMessage('Nome não pode ser nulo') ], function(req, res) {

   // Check Erros
   const errors = getValidationResult(req);
   if(!errors.isEmpty()){
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