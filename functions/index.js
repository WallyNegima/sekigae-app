const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const util = require('./componetns/utils/array');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));

const random = require('./componetns/algorithms/random');
const star = require('./componetns/algorithms/star');


admin.initializeApp();

app.get('/server', functions.https.onRequest((req, res) => {
    return res.send({"status": "OK"});
}));

app.get('/server/random', functions.https.onRequest((req, res) => {
    const result = random.exchangeByAI();
    return res.send(result);
}));

app.get('/server/hello', functions.https.onRequest((req, res) => {
    return res.send({"message": "Hello, World2!"});
}));

app.get('/server/star', functions.https.onRequest(async (req, res) => {
    const result = await star.getMemberByStar();
    return res.send(result);
}));

exports.app = functions.https.onRequest(app);