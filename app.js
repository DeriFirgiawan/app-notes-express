const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const config = require('./config/db');
const app = express();

// Connection Dabases
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Success Conect To DB');
});

db.on('error', (err) => {
  console.log(err);
});

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// View Engine
app.set('view engine', 'ejs');

// Routes
app.use('/', router);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
