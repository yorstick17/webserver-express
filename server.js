const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//Helpers



app.get('/', function(req, res) {

    res.render('home', {
        nombre: "yorstick"
    });
});

app.get('/about', function(req, res) {

    res.render('about', {
        nombre: "yorstick nano"
    });
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})