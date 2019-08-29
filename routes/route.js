const express = require('express');
const router =  express.Router();

router.get('/inclink', function(req, res){
   res.render('formIncMenu');
});

module.exports = router;