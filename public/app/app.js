// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router']);

// CONFIG
// ============================================================
angular.module("app")
	.config(function($stateProvider, $urlRouterProvider) {

		// INITILIZE STATES
		// ============================================================
		$stateProvider

		// HOME STATE
			.state('user', {
			url: '/user',
			templateUrl: './app/routes/user/userTmpl.html',
			controller: 'userCtrl'
		})


		// ORDER STATE
		.state('order', {
			url: '/order/:id',
			templateUrl: './app/routes/order/orderTmpl.html',
			controller: 'orderCtrl',
			resolve: {
				order: function(mainService, $stateParams) {
					return mainService.getUserOrder($stateParams.id);
				}
			}
		})


		// PRODUCTS STATE
		.state('products', {
			url: '/products/:id/:cartid',
			templateUrl: './app/routes/products/productsTmpl.html',
			controller: 'productsCtrl',
			resolve: {
				products: function(mainService, $state) {
					return mainService.getProducts();
				}
			}
		});




		// ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('user');
	});
