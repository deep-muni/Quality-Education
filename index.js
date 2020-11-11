const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongodb connection string 
const db = require("./config/keys").mongoURI;

mongoose
    .connect(
        db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.get('/', function (req, res) {
    res.status(200).send("OK");
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Express server running on port 5000');
});
