const express = require('express');
const hbs = require('hbs');
const log = require('./small/log');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

hbs.registerHelper('getCurrentYear',()=>{
   return  new Date().getFullYear()
});
hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
});

app.get('/',(req,res, next)=>{
     res.render('home.hbs',{
        pageTitle: 'Moje Sajta',
        welcome: 'Vítejte na této sajtě'
     });
     log.savelog(req,res);
     
});   

// app.use((req,res,next)=>{
//      res.render('oprava.hbs');
// });  
//nerendruje static page protoze oprava ma prednost
app.use(express.static(__dirname + '/public'));

app.get('/about',(req,res,next)=>{
  res.render('about.hbs',{
      pageTitle: 'About Page',
       });
       log.savelog(req,res);
});
//bad
app.get('/bad',(req,res,next)=>{
    res.send({
        name: 'Požadovaný zdroj neexistuje',
        status:404
    });
    log.savelog(req,res);
    });

app.use((req, res, next)=> {
  res.status(404).send('404 - Page not found');
  log.savelog(req,res);
  
});

app.listen(port,()=>{
    console.log(`Server běží na portu ${port}`);
});