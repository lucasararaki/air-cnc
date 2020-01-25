const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

mongoose.connect('mongodb+srv://aircnc:aircnc@cluster0-rtelk.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.get('/health', (req, res) => {
  return res.send('Olá mundo!');
});

app.use(routes);

app.listen(4000);