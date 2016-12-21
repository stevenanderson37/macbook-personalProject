// INITIALIZE SERVICE
// ============================================================
angular.module("app")
	.service("mainService", function($http) {

		this.getUsers = function() {
			return $http({
				method: 'GET',
				url: '/api/user'
			});
		};

		this.getUserOrder = function(id) {
			return $http({
					method: 'GET',
					url: '/api/order/' + id
				})
				.catch(function(err) {
					console.log(err);

				});
		};

		this.getProducts = function() {
			return $http({
				method: "GET",
				url: "/api/products"
			});
		};

		this.addToCart = function(id, productid, qty) {
			return $http({
				method: 'POST',
				url: '/api/add/' + id,
				data: {
					id: productid,
					qty: qty
				}
			});
		};

		this.updateProductQty = function(id, qty) {
			return $http({
				method: 'PUT',
				url: "/api/update/" + id,
				data: {
					qty: qty
				}
			});
		};

		this.removeFromCart = function(id) {
			return $http({
				method: 'DELETE',
				url: '/api/delete/' + id
			});
		};

		this.placeOrder = function(id, orderid) {
			return $http({
				method: 'PUT',
				url: '/api/complete/' + orderid + "/" + id
			});
		};

	});
