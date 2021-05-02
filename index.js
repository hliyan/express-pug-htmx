const app = require('express')();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {message: 'Hello'});
});

app.listen(4000, ()=> {
  console.log('App running...');
});
