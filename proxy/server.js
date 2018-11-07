const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();
const apiProxy = httpProxy.createProxyServer();

const stockPriceChart = 'http://localhost:3001',
      priceVolumeChart = 'http://localhost:3002',
      buyService = 'http://localhost:3003',
      peopleAlsoBought = 'http://localhost:3004';


app.use(express.static(__dirname + '/public'));
const port = 3000;

let stockPriceChartId = 0;
app.all('/api/symbol/:stockPriceChartId/day', (req, res) => {
  stockPriceChartId = req.params.stockPriceChartId;
  apiProxy.web(req, res, {target: stockPriceChart});
});

app.all(`/api/symbol/:${stockPriceChartId + 1}/week`, (req, res) => {
  apiProxy.web(req, res, { target: stockPriceChart });
});

app.all(`/api/symbol/:${stockPriceChartId + 2}/week`, (req, res) => {
  apiProxy.web(req, res, { target: stockPriceChart });
});

app.all(`/api/symbol/:${stockPriceChartId + 3}/week`, (req, res) => {
  apiProxy.web(req, res, { target: stockPriceChart });
});

app.all(`/api/symbol/:${stockPriceChartId + 4}/week`, (req, res) => {
  apiProxy.web(req, res, { target: stockPriceChart });
});

app.all('/api/volumes/symbols/6', (req, res) => {
  apiProxy.web(req, res, { target: priceVolumeChart });
});

app.all('/api/buytest', (req, res) => {
  apiProxy.web(req, res, { target: buyService });
});

app.all('/api/alsoBought/1', (req, res) => {
  apiProxy.web(req, res, { target: peopleAlsoBought });
});

app.listen(port, () => console.log('Server listening on port ' + port));
