const express = require('express');
const app = express();
const morgan = require('morgan');
//listen to request in this port
app.listen(3000);

//register view engine
app.set('view engine', 'ejs');

const blogs = [
  { title: 'lolzin', snippet: 'sahausuausauhsuuash' },
  { title: 'Vavaz', snippet: 'piu piu piu' },
  { title: 'The Office', snippet: 'kkkkkkkkkkkkkkkkkkk' },
];

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/about-me', (req, res) => {
  res.redirect('/about');
});

app.get('/express', (req, res) => {
  res.status(200).send('Olha śo eu sei usar o express');
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create' });
});

//404 page
// it will responde to all requests if the code reach out the bottom

app.use((req, res) => {
  res.status(404).render('404.ejs', { title: 'Not Found' });
});
