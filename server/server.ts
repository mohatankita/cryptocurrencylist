import { request } from 'https';

const express = require('express');
let app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Allow-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

const rp = require('request-promise');

var router = express.Router();
router.get('/', function(req, res) {
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
          start: 1,
          limit: 5000,
          convert: 'USD'
        },
        headers: {
          'X-CMC_PRO_API_KEY': '7c9baf60-4108-497a-a1fc-048545ab012c'
        },
        json: true,
        gzip: true
      };

      rp(requestOptions).then(response => {
        console.log('API call response:', response);
        res.send(response);
      }).catch((err) => {
        console.log('API call error:', err.message);
      });

    //res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/cryptocurrentlist', router);

app.listen(4201, '127.0.0.1', function() {
    console.log("Server is now listening on 4201");
})