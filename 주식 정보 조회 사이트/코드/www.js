const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
require('dotenv').config();

app.set("views", "./src/views");
app.set("view engine", "ejs"); 

app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true }));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const route = require('./src/route/route.js')
app.use("/", route);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});




