const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune)
app.listen(4000, () => console.log("Server running on 4000"));

