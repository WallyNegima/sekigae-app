const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const random = require('./componetns/algorithms/random');


admin.initializeApp();

app.get('/server', (req, res) => {
    return res.send({"status": "OK"});
});

app.get('/server/random', (req, res) => {
    const result = random.exchangeByAI();
    return res.send(result);
});

app.get('/server/hello', (req, res) => {
    return res.send({"message": "Hello, World2!"});
});

exports.app = functions.https.onRequest(app);