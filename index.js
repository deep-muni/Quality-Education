const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const userRoute = require('./backend/route/UserRoute');
const adminRoute = require('./backend/route/adminRoute');
const materialRoute = require('./backend/route/MaterialRoute');
const db = require('./backend/db/connection');

app.use(express.static(__dirname + '/frontend/build/'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.status(200).send("OK");
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use('/material', materialRoute);

app.listen(process.env.PORT || 5000, function () {
    console.log('Express server running on port 5000');
});
