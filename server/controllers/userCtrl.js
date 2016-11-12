var app = require('../index');
var db = app.get('db');

module.exports = {
	createUser: function(req, res, next) {
		var user = req.body;
		db.user_create([user.first_name, user.last_name, user.primary_area, user.primary_phone, user.street_address_a, user.city, user.state, user.zip, user.business_address, user.email], function(err, user) {
			if (err) {
				return res.status(500)
					.send(err);
			}

			user = user[0];
			db.order_create([user.id], function(err, order) {
				if (err) {
					return res.status(500)
						.send(err);
				}
				res.status(200)
					.send('User and Order created successfully');
			});
		});
	},
	getUsers: function(req, res, next) {
		db.users(function(err, users) {
			if (err) {
				return res.status(500)
					.send(err);
			}
			res.status(200)
				.send(users);
		});
	},
};
