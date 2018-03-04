const express = require('express');
const path = require('path');
const redis = require('redis');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

// Body Parser initi
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Method Override (to be able to send delete request)
app.use(methodOverride('_method'));

app.listen(PORT, () => {
  console.info(`App is running on port ${PORT}`);
});
