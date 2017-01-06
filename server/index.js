// REQUIRE //
var express = require('express');
var cors = require('cors');
var massive = require('massive');
var bodyParser = require('body-parser');
var session = require('express-session');

// CONFIG //
var config = require('./config');

// APP //
var app = module.exports = express();
app.use(express.static(__dirname + "./../public"));
app.use(bodyParser.json());
app.use(cors());

// MASSIVE //
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
	connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

var dbSetup = require('./services/dbSetup');
dbSetup.run();

// CONTROLLERS //
var userCtrl = require('./controllers/userCtrl');
var orderCtrl = require('./controllers/orderCtrl');
var productCtrl = require('./controllers/productsCtrl');
// var favoritesCtrl = require('./controllers/favoritesCtrl');

// SERVICES //
var passport = require('./services/passport');

// POLICIES //
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	return next();
};

var isAdmin = function(req, res, next) {
	if (req.user.userType === 'admin') {
		next();
	} else {
		return res.status(401)
			.send();
	}
};

// Session and passport //
app.use(session({
	secret: config.SESSION_SECRET,
	saveUninitialized: false,
	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// ENDPOINTS //
//===================================

// Passport //
app.post('/api/login', passport.authenticate('local', {
	successRedirect: '/api/me'
}));
app.get('/api/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});

// User //
app.post('/api/register', userCtrl.register);
app.post('/api/user', userCtrl.read);
app.get('/api/me', isAuthed, userCtrl.me);
app.put('/api/user/current', isAuthed, userCtrl.update);

// Order //
app.post('/api/create_order/:userid', orderCtrl.createOrder);
app.put('/api/complete/:orderid/:userid', orderCtrl.completeOrder, orderCtrl.createOrder);
app.get('/api/order/:userid', orderCtrl.getUserOrder);
app.get('/api/completed_orders/:userid', orderCtrl.getUserHistory);

// Products in Cart //
app.get('/api/products', productCtrl.getProducts);
app.get('/api/cart/:cartid', productCtrl.getInCart);
app.post('/api/add/:cartid', productCtrl.addToCart);
app.put('/api/update/:productid', productCtrl.updateProductInCart);
app.delete('/api/delete/:productid', productCtrl.deleteCartItem);

// Favorites //
// app.post('/api/create_favorites/:userid', userCtrl.);
// app.get('/api/favorites/:userid', orderCtrl.);

// Products in Favorites //
// app.post('/api/favorites_add/:favoritesid', orderCtrl.);
// app.delete('/api/delete/:productid', orderCtrl.);



// CONNECTIONS //
var port = config.PORT;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});
