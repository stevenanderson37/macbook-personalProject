var app = require('../index');
var db = app.get('db');

module.exports = {
	getInFavorites: function(req, res, next) {
		db.product_cart_find([req.params.cartid], function(err, products) {
			if (err) {
				return res.status(500)
					.send(err);
			}
			res.status(200)
				.send(products);
		});
	},
	addToFavorites: function(req, res, next) {
		var product = req.body;

		db.product_cart_insert([req.params.cartid, product.id, product.qty], function(err, productInCart) {
			if (err) {
				return res.status(500)
					.send(err);
			}
			res.status(200)
				.send('Item added successfully');
		});
	},
	deleteFavoritesItem: function(req, res, next) {
		db.product_cart_remove([req.params.productid], function(err, product) {
			if (err) {
				return res.status(500)
					.send(err);
			}
			res.status(200)
				.send('Item removed successfully');
		});
	}
};
