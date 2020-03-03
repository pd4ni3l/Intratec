const express = require('express')
const bodyParser = require('body-parser');
const hbs = require('express-hbs');
// const path = require('path');
// const cookieParser = require('cookie-parser');
const session = require('express-session');
// const expressValidator = require('express-validator');
const app = express(); 
const PORT = 8080;
const sqlite3 = require('sqlite3');

// //Controlando acesso com login
// const basicAuth = require('./_helpers/basic-auth');
// const errorHandler = require('./_helpers/error-handler');
// // api routes
// app.use('/users', require('./users/users.controller'));
// // use basic HTTP auth to secure the api
// app.use(basicAuth);
// // global error handler
// app.use(errorHandler);

const db = new sqlite3.Database('db/intratec.db', function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log("Conectado ao banco 1")
});

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
const navega = require('./routes/navega.route');

app.use('/formincluir', formincluir);
app.use('/navega', navega);

// Monta barra de menu de navegação
app.get('/navegacao', function(request, response) {
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
