const express = require('express')
const { check, validationResult } = require('express-validator');

const router =  express.Router();

router.get('/', function( req, res){
   res.render('formincluir', {success: req.session.success, errors: req.session.errors });
   req.session.errors = null;
});
/*
router.post('/post',[ check('url', 'URL vazio').isURL(), 
                      check('nome', 'Nome vazio').isAlpha() ], function(req, res, next) {
*/
router.post('/post',[ check('url').isURL(), 
                      check('nome').isAlpha() ], function(req, res, next) {
   const errors = validationResult(req);
   console.log(errors)
   if(!errors){
      console.log('errors.value == null: ', errors)
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/formincluir');
   }
   else{
      req.session.success = true;
      console.log('ELSE.....', errors)
      res.redirect('/navega/post' )
   } 
});

module.exports = router;