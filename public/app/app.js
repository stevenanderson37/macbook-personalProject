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

		// MacBook HOME STATE
    .state('macbook', {
      url: "/macbook",
      templateUrl: "./app/routes/home/homeTmpl.html",
      controller: "homeCtrl"
    })

    // MacBook DESIGN STATE
    .state('design', {
      url: "/design",
      templateUrl: "./app/routes/design/designTmpl.html",
      controller: "designCtrl"
    })

    // MacBook macOS STATE
    .state('macos', {
      url: "/macos",
      templateUrl: "./app/routes/macos/macosTmpl.html",
      controller: "macosCtrl"
    })

    // MacBook TECH SPECS STATE
    .state('specs', {
      url: "/specs",
      templateUrl: "./app/routes/specs/specsTmpl.html",
      controller: "specsCtrl"
    })

    // MacBook WIRELESS STATE
    .state('wireless', {
      url: "/wireless",
      templateUrl: "./app/routes/wireless/wirelessTmpl.html",
      controller: "wirelessCtrl"
    })

    // MacBook BAG STATE
    .state('bag', {
      url: "/bag",
      templateUrl: "./app/routes/bag/bagTmpl.html",
      controller: "bagCtrl"
    })

		// USER STATE
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
		$urlRouterProvider.otherwise('macbook');
	});
