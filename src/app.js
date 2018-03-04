const express = require('express');
const path = require('path');
const redis = require('redis');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
// app.use(express.static('client'));
// Body Parser initi
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Method Override (to be able to send delete request)
app.use(methodOverride('_method'));

// some simple routes
app.get('/api/ping', (req, res) => {
  res.json({ message: 'PONG' });
});

app.listen(PORT, () => {
  console.info(`App is running on port ${PORT}`);
});
