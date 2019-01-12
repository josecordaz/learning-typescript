"use strict";
exports.__esModule = true;
var restify = require("restify");
var products_1 = require("./products");
var corsMiddleware = require("restify-cors-middleware");
var server = restify.createServer();
var port = 3031;
var options = {
    origins: ['*'],
    allowHeaders: [],
    exposeHeaders: []
};
var cors = corsMiddleware(options);
server.use(restify.plugins.bodyParser());
server.use(cors.preflight);
server.use(cors.actual);
server.get('/api/products', function (request, response) {
    console.log(products_1.products);
    response.json(products_1.products);
});
server.get('/api/products/:id', function (request, response) {
    var id = Number(request.params.id);
    var product = products_1.products.filter(function (product) { return product.id === id; });
    response.json(product);
});
server.post('/api/products', function (request, response) {
    var newProduct = request.body;
    products_1.products.push(newProduct);
    response.json(products_1.products);
});
// server.put();
// server.del();
server.listen(port, function () { return console.log("REST API is running on port " + port); });
