const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));


app.get('/',(req,res)=>{
     res.render('home.hbs',{
        pageTitle: 'Moje Sajta',
        currentYear: new Date().getFullYear(),
        welcome: 'Vítejte na této sajtě'
     });
});   


app.get('/about',(req,res)=>{
  res.render('about.hbs',{
      pageTitle: 'About Page',
      currentYear: new Date().getFullYear()
     });
});
//bad
app.get('/bad',(req,res)=>{
    res.send({
        name: 'Požadovaný zdroj neexistuje',
        status:404
        });
    });

app.listen(3000,()=>{
    console.log('Server běží na portu 3000');
});