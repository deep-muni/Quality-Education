const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.status(200).send("OK");
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Express server running on port 5000');
});
