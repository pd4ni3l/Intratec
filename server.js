const express = require('express')
const bodyParser = require('body-parser');
const hbs = require('express-hbs');

const db = require('./controllers/controller.db');

// const path = require('path');
// const cookieParser = require('cookie-parser');
const session = require('express-session');
// const expressValidator = require('express-validator');
const app = express(); 

const PORT = 8090;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser())
app.use(session({secret: 'nosecret', saveUninitialized: false, resave: false}));

app.use(express.static(__dirname + '/public'))

app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views'
  }));
 app.set('view engine', 'hbs');
 app.set('views', __dirname + '/views');

// Routes
const formincluir = require('./routes/formIncluir.route');
// const controllerMenu = require('./controllers/controller.menu');
// const navega = require('./routes/navega.route');
const formincluirvpn = require('./routes/formIncluirVpn.route');
const vpncards = require('./routes/vpncards.route')

app.use('/formincluir', formincluir);
// app.use('/formincluir', controllerMenu.get);
// app.use('/navega', navega);
app.use('/formincluirvpn', formincluirvpn);
app.use('/vpncards', vpncards);

// Monta barra de menu de navegação
app.get('/navegacao', function(req, response) {
    db.serialize(function(){
        db.all("SELECT nome_url, url_url FROM navbar ORDER BY nome_url;", function(err, rows){
            if (err) {
                console.log('Droga aconteceu algum erro' + err)
                //throw err;
            }
            else{
                //console.log(rows)
                //response.send(rows)
                response.json(rows)
            }    
        })
    })
    
})

// Monta CARDs
app.get('/vpncards', function(request, response) {
    db.serialize(function(){
        // listar nome_url_vpn, url_url_vpn, 
        // agrupado por tipo_acesso: direto(0), sovpn(1), vpnwrkst(2)
        // db.all("SELECT nome_url_vpn, url_url_vpn, tipo_acesso FROM vpn WHERE tipo_acesso='0' ORDER BY nome_url_vpn;", function(err, rows){
        db.all("SELECT nome_url_vpn, url_url_vpn, tipo_acesso FROM vpn ORDER BY tipo_acesso;", function(err, rows){
            if (err) {
                console.log('Droga aconteceu algum erro' + err);
                //throw err;
            }
            else{
                //console.log(rows)
                //response.send(rows)
                response.json(rows)
            }    
        })
    })
})
app.post('/vpn',function(req, res){
    //console.log(req.body.nome, req.body.url)
    let sql = 'INSERT INTO vpn (nome_url_vpn, url_url_vpn, tipo_acesso) VALUES (?, ?, ?)'
    var params = [req.body.nome, req.body.url, req.body.acesso]
    db.run(sql, params, function(err, result){
        if (err){
            console.log('Xiii deu ruim insert.server ' + err)
            return;
        }
        //console.log('Registro inserido ID: ' + this.lastID)
        res.status(200).redirect('index.html')
    })
})

app.post('/navegacao',function(req, res){
    //console.log(req.body.nome, req.body.url)
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

// LISTEN
app.listen(PORT, function(){
    console.log("Servidor rodando na porta " + PORT)
})
