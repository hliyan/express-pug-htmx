const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {message: 'Hello'});
});

app.listen(4000, ()=> {
  console.log('App running...');
});
