const express = require('express');
const app = express();

//listen to request in this port
app.listen(3000);

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/about-me', (req, res) => {
  res.redirect('/about');
});

app.get('/express', (req, res) => {
  res.status(200).send('Olha śo eu sei usar o express');
});

//404 page
// it will responde to all requests if the code reach out the bottom

app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
