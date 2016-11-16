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

		// MacBook BUY_a STATE
    .state('buy_a', {
      url: "/buy_a",
      templateUrl: "./app/routes/buy/buyTmpl_a.html",
      controller: "buyCtrl_a"
    })

		// MacBook BUY_b STATE
    .state('buy_b', {
      url: "/buy_b",
      templateUrl: "./app/routes/buy/buyTmpl_b.html",
      controller: "buyCtrl_b"
    })

		// MacBook BUY_a_Silver STATE
    .state('buy_a_silver', {
      url: "/buy_a_silver",
      templateUrl: "./app/routes/buy/buy_a/buyTmpl_a_Silver.html",
      controller: "buyCtrl_a_Silver"
    })

		// MacBook BUY_a_Silver_256GB STATE
    .state('buy_a_silver_256gb', {
      url: "/buy_a_silver_256gb",
      templateUrl: "./app/routes/buy/buy_a/buyTmpl_a_Silver_256GB.html",
      controller: "buyCtrl_a_Silver_256GB"
    })

		// MacBook BUY_a_Silver_256GB_1.1GHz STATE
    .state('silver_256gb_1.1ghz', {
      url: "/silver_256gb_1.1ghz",
      templateUrl: "./app/routes/buy/buy_b/Silver_256GB_1.1GHz.html",
      controller: "Silver_256GB_1.1GHz"
    })

		// USER STATE
		.state('user', {
			url: "/user",
			templateUrl: './app/routes/user/userTmpl.html',
			controller: 'userCtrl'
		})

		// ORDER STATE
		.state('order', {
			url: "/order/:id",
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
			url: "/products/:id/:cartid",
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
