const express = require('express');
const rotaUser = require('./rota-users');

var app = express();
app.use(rotaUser);

app.listen(8080);