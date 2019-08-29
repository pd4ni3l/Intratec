const express = require('express')
const bodyParser = require('body-parser');
const hbs = require('express-hbs');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const app = express();
const PORT = 8080;
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db/intratec.db', function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log("Conectado ao banco")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));


app.use(express.static(__dirname + '/public'))

app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views'
  }));
 app.set('view engine', 'hbs');
 app.set('views', __dirname + '/views');


// Routes
const blockchain = require('./routes/blockchain.route');

app.use('/blockchain',blockchain);

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
    let sql = 'INSERT INTO navbar (nome_url, url_url) VALUES (?, ?)'
    var params = [req.body.nomeLink, req.body.url]
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
