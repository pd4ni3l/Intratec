const express = require('express');
const hbs = require('express-hbs');

const { check, validationResult } = require('express-validator');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db/intratec.db', function (err) {
   if (err) {
      console.log(err)
      return
   }
   console.log("Conectado ao banco")
});

const router = express.Router();

router.get('/', function (req, res) {
   res.render('formincluir_vpn');
});
router.get('/err', function (req, res) {
   res.render('formincluir_vpn', { success: req.session.success, errors: req.session.errors });
   req.session.errors = null;
});
router.get('/ok', function (req, res) {
   res.render('formincluir_vpn', { success: req.session.success, errors: req.session.errors });
   req.session.errors = null;
});

router.post('/post', [check('url').isURL({ protocols: ['http', 'https'], require_protocol: true })], (req, res) => {
   const erros = validationResult(req);
   // console.log('Erros SIM ou Não:', erros.errors);
   if (!erros.isEmpty()) {
      req.session.errors = erros.errors;
      req.session.success = false;
      return res.status(422).json({
         mensagem: 'POST ',
         erros: erros.array()
      });
   }
   if (req.body.nome == '' && req.body.url == '') {
      let errors = 'Falta nome e URL';
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/formincluirvpn/err');
   }
   else if (req.body.url == '' && req.body.nome != '') {
      let errors = 'Falta url';
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/formincluirvpn/err');
   }
   else if (req.body.url != '' && req.body.nome == '') {
      let errors = 'Falta nome';
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/formincluirvpn/err');
   }
   else {
      req.session.success = true;

      let sql = 'INSERT INTO vpn (nome_url_vpn, url_url_vpn, tipo_acesso) VALUES (?, ?, ?)'
      var params = [req.body.nome, req.body.url, req.body.acesso]

      db.run(sql, params, function (err, resp) {
         if (err) {
            console.log('Xiii deu ruim ao inserir vpn' + err)
            return;
         }
         db.close;
         let success = 'Registro inserido';
         req.session.success = params;
         res.redirect('/formincluirvpn/ok');
      })
   }
});

router.get('/listar/', (req, res) => {
   db.serialize(function () {
      db.all("SELECT vpn_id, nome_url_vpn, url_url_vpn, tipo_acesso FROM vpn ORDER BY nome_url_vpn;", function (err, rows) {
         if (err) {
            console.log('Droga aconteceu algum erro' + err)
            throw err;
         }
         else {
            //console.log(rows)
            req.session.listar = rows;
            //console.log(req.session.listar)
            res.render('formincluir_vpn', { listar: req.session.listar });
            //res.json(rows)
         }
      })
   });
});

router.get('/del/', (req, res) => {
   let sql = 'DELETE FROM vpn WHERE vpn_id = ?'
   var params = [req.query.id];
   db.serialize(function () {
      db.run(sql, params, (err, row) => {
         if (err) {
            console.log('Droga aconteceu algum erro' + err)
         }
         else {
            console.log('REQUESTE DEL', req.query.id, req.query.nome, req.query.url);
            req.session.delok = true;
            let params = [req.query.id, req.query.nome, req.query.url];
            req.session.delok = params;
            console.log(req.session.success);
            //res.redirect('/formincluir')
            res.render('formincluir_vpn', { delok: req.session.delok });
         }
      })
   });
});

module.exports = router;