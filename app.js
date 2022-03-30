
require('dotenv').config();
const hbs = require('hbs');
const express = require('express');
const app = express();

const port = process.env.PORT;

hbs.registerPartials(__dirname+'/views/partials')
const datos = {
    nombre:"davier perez",
    titulo:"renderizado con hbs"
};
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',datos);
});

app.get('/generic', (req, res) => {
    //res.sendFile(__dirname+'/public/generic.html');
    res.render('generic', datos);
});

app.get('/elements', (req, res) => {
    res.render('elements',datos);
});

app.listen(port);