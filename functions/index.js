const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const env = process.env;

const app = express();
app.use(bodyParser.json());

const path = env.GOOGLE_APPLICATION_CREDENTIALS;
console.log(path);
const serviceAccount = require(path);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sekigae-114514.firebaseio.com"
});

app.get('/server', (req, res) => {
    return res.send({"message": "Hello, World!"});
});

exports.app = functions.https.onRequest(app);