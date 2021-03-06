require('newrelic');
const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();
const apiProxy = httpProxy.createProxyServer();

const stockPriceChart = 'http://stockpricegraphlb-1307678531.us-west-2.elb.amazonaws.com/';
      // priceVolumeChart = 'http://ec2-34-224-212-238.compute-1.amazonaws.com/',
      // buyService = 'http://ec2-34-200-253-32.compute-1.amazonaws.com/',
      // peopleAlsoBought = 'http://ec2-18-224-182-229.us-east-2.compute.amazonaws.com/'

app.use(express.static(__dirname + '/public'));
const port = 3000;

let stockPriceChartId = 1;
app.all('/pricechart/:Id/day', (req, res) => {
  // stockPriceChartId = req.params.stockPriceChartId;
  apiProxy.web(req, res, {target: stockPriceChart});
});

// app.all(`/api/symbol/:${stockPriceChartId + 1}/week`, (req, res) => {
//   apiProxy.web(req, res, { target: stockPriceChart });
// });

// app.all(`/api/symbol/:${stockPriceChartId + 2}/week`, (req, res) => {
//   apiProxy.web(req, res, { target: stockPriceChart });
// });

// app.all(`/api/symbol/:${stockPriceChartId + 3}/week`, (req, res) => {
//   apiProxy.web(req, res, { target: stockPriceChart });
// });

// app.all(`/api/symbol/:${stockPriceChartId + 4}/week`, (req, res) => {
//   apiProxy.web(req, res, { target: stockPriceChart });
// });

// app.all(`/api/volumes/symbols/:id`, (req, res) => {
//   apiProxy.web(req, res, { target: priceVolumeChart });
// });

// app.all('/api/buytest', (req, res) => {
//   apiProxy.web(req, res, { target: buyService });
// });

// app.all('/api/alsoBought/1', (req, res) => {
//   apiProxy.web(req, res, { target: peopleAlsoBought });
// });

app.get('/loaderio-ceb2949e3afe2cc994622672ab15a400/', (req, res) => {
  res.send('loaderio-ceb2949e3afe2cc994622672ab15a400');
});

app.listen(port, () => console.log('Server listening on port ' + port));
