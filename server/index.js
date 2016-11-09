// REQUIRE //
var express = require('express');
var cors = require('cors');
var massive = require('massive');
var bodyParser = require('body-parser');

// APP //
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));

// MASSIVE //
var massiveUri = 'postgres://localhost/cart';
var massiveServer = massive.connectSync({
	connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

// CONTROLLERS //
var userCtrl = require('./controllers/userCtrl');
var orderCtrl = require('./controllers/orderCtrl');
var productCtrl = require('./controllers/productsCtrl');

// ENDPOINTS //
//===================================
// USER //
app.post('/api/user', userCtrl.createUser);
app.get('/api/user', userCtrl.getUsers);

// ORDER //
app.post('/api/order/:userid', orderCtrl.createOrder);
app.put('/api/order/complete/:orderid/:userid', orderCtrl.completeOrder, orderCtrl.createOrder);
app.get('/api/order/:userid', orderCtrl.getUserOrder);
app.get('/api/order/completed/:userid', orderCtrl.getUserHistory);

// PRODUCTS IN CART //
app.get('/api/products', productCtrl.getProducts);
app.get('/api/in/cart/:cartid', productCtrl.getInCart);
app.post('/api/add/item/cart/:cartid', productCtrl.addToCart);
app.put('/api/update/qty/:productid', productCtrl.updateProductInCart);
app.delete('/api/delete/item/cart/:productid', productCtrl.deleteCartItem);

// LISTEN //
var port = 3000;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});
