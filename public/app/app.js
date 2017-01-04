// INITIALIZE APP
// ============================================================
var app = angular.module("app", ['ui.router', 'ngAnimate']);

// CONFIG
// ============================================================
angular.module("app")
	.config(function($stateProvider, $urlRouterProvider) {

		// INITIALIZE STATES
		// ============================================================
		$stateProvider

		// MacBook HOME STATE
    .state('macbook', {
      url: '/macbook',
      templateUrl: "./app/routes/home/homeTmpl.html",
      controller: "homeCtrl"
    })

		// MacBook DESIGN VIDEO STATE
		.state('design_video', {
      url: '/macbook/design_video',
      templateUrl: "./app/routes/home/design_video/designVideoTmpl.html",
      controller: "designVideoCtrl"
    })

    // MacBook DESIGN STATE
    .state('design', {
      url: '/macbook/design',
      templateUrl: "./app/routes/design/designTmpl.html",
      controller: "designCtrl"
    })

    // MacBook macOS STATE
    .state('macos', {
      url: '/macbook/macos',
      templateUrl: "./app/routes/macos/macosTmpl.html",
      controller: "macosCtrl"
    })

    // MacBook TECH SPECS STATE
    .state('specs', {
      url: '/macbook/specs',
      templateUrl: "./app/routes/specs/specsTmpl.html",
      controller: "specsCtrl"
    })

    // MacBook WIRELESS STATE
    .state('wireless', {
      url: '/macbook/wireless',
      templateUrl: "./app/routes/wireless/wirelessTmpl.html",
      controller: "wirelessCtrl"
    })

		// MacBook BUY_a STATE
    .state('buy_a', {
      url: '/macbook/buy_a',
      templateUrl: "./app/routes/buy/buyTmpl_a.html",
      controller: "buyCtrl_a"
    })

		// MacBook BUY_b STATE
    .state('buy_b', {
      url: '/macbook/buy_b',
      templateUrl: "./app/routes/buy/buyTmpl_b.html",
      controller: "buyCtrl_b"
    })

		// MacBook BUY_c STATE
    .state('buy_c', {
      url: '/macbook/buy_c',
      templateUrl: "./app/routes/buy/buyTmpl_c.html",
      controller: "buyCtrl_c"
    })

		// CREATE ACCOUNT STATE
		.state('create_account', {
      url: '/register',
      templateUrl: "./app/routes/signin/create-account/createAccTmpl.html",
      controller: "createAccCtrl"
    })

		// PRIVACY STATE
		.state('privacy', {
      url: '/privacy',
      templateUrl: "./app/routes/signin/create-account/privacy/privacyTmpl.html",
      controller: "privacyCtrl"
    })

		// FAQ STATE
		.state('faq', {
      url: '/faq',
      templateUrl: "./app/routes/signin/create-account/createFAQTmpl.html",
      controller: "createFAQCtrl"
    })

		// SIGN IN STATE
		.state('signin', {
      url: '/signin',
      templateUrl: "./app/routes/signin/signinTmpl.html",
      controller: "signinCtrl"
    })

		// ACCOUNT STATE
		.state('account', {
			url: '/account',
			templateUrl: "./app/routes/account/accountTmpl.html",
			controller: "accountCtrl",
			resolve: {
				user: function(authService, $state) {
					return authService.getCurrentUser()
						.then(function(response) {
							if (!response.data)
								$state.go('signin');
							return response.data;
						})
						.catch(function(err) {
							$state.go('signin');
						});
				}
			}
		})

		// ACCOUNT EDIT STATE
		.state('account_edit', {
			url: '/account_edit',
			templateUrl: "./app/routes/account/accountEditTmpl.html",
			controller: "accountEditCtrl",
			resolve: {
				user: function(authService, $state) {
					return authService.getCurrentUser()
						.then(function(response) {
							if (!response.data)
								$state.go('signin');
							return response.data;
						})
						.catch(function(err) {
							$state.alert('Unable to complete');
						});
				}
			}
		})

    // BAG STATE
    .state('bag', {
      url: '/bag',
      templateUrl: "./app/routes/bag/bagTmpl.html",
      controller: "bagCtrl"
    })

		// FAVORITES STATE
    .state('favorites', {
      url: '/favorites',
      templateUrl: "./app/routes/favorites/favoritesTmpl.html",
      controller: "favoritesCtrl"
    })

		// ORDERS_a STATE
    .state('orders_a', {
      url: '/orders_a',
      templateUrl: "./app/routes/orders/ordersTmpl_a.html",
      controller: "ordersCtrl_a"
    })

		// USER STATE
		.state('user', {
			url: '/order_complete',
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
		})

		// MacBook BUY_Silver STATE
    .state('buy_a_silver', {
      url: '/macbook/silver',
      templateUrl: "./app/routes/buy/buy_silver/buyTmpl_a_Silver.html",
      controller: "buyCtrl_a_Silver"
    })

		// MacBook BUY_Silver_256GB STATE
    .state('buy_a_silver_256gb', {
      url: '/macbook/silver_256gb',
      templateUrl: "./app/routes/buy/buy_silver/buyTmpl_a_Silver_256GB.html",
      controller: "buyCtrl_a_Silver_256GB"
    })

		// MacBook BUY_Silver_512GB STATE
    .state('silver_512gb', {
      url: '/macbook/silver_512gb',
      templateUrl: "./app/routes/buy/buy_silver/silver_512GB.html",
      controller: "silver_512GB"
    })

		// MacBook BUY_Silver_256GB_1.1GHz STATE
    .state('silver_256gb_11ghz', {
      url: '/macbook/silver_256gb_11ghz',
      templateUrl: "./app/routes/buy/buy_silver/silver_256GB_1.1GHz.html",
      controller: "silver_256GB_1.1GHz"
    })

		// MacBook BUY_Silver_256GB_1.3GHz STATE
    .state('silver_256gb_13ghz', {
      url: '/macbook/silver_256gb_13ghz',
      templateUrl: "./app/routes/buy/buy_silver/silver_256GB_1.3GHz.html",
      controller: "silver_256GB_1.3GHz"
    })

		// MacBook BUY_Silver_512GB_1.2GHz STATE
    .state('silver_512gb_12ghz', {
      url: '/macbook/silver_512gb_12ghz',
      templateUrl: "./app/routes/buy/buy_silver/silver_512GB_1.2GHz.html",
      controller: "silver_512GB_1.2GHz"
    })

		// MacBook BUY_Silver_512GB_1.3GHz STATE
    .state('silver_512gb_13ghz', {
      url: '/macbook/silver_512gb_13ghz',
      templateUrl: "./app/routes/buy/buy_silver/silver_512GB_1.3GHz.html",
      controller: "silver_512GB_1.3GHz"
    })

		// MacBook BUY_Gold STATE
    .state('gold', {
      url: '/macbook/gold',
      templateUrl: "./app/routes/buy/buy_gold/gold.html",
      controller: "gold"
    })

		// MacBook BUY_Gold_256GB STATE
    .state('gold_256gb', {
      url: '/macbook/gold_256gb',
      templateUrl: "./app/routes/buy/buy_gold/gold_256GB.html",
      controller: "gold_256GB"
    })

		// MacBook BUY_Gold_512GB STATE
    .state('gold_512gb', {
      url: '/macbook/gold_512gb',
      templateUrl: "./app/routes/buy/buy_gold/gold_512GB.html",
      controller: "gold_512GB"
    })

		// MacBook BUY_Gold_256GB_1.1GHz STATE
    .state('gold_256gb_11ghz', {
      url: '/macbook/gold_256gb_11ghz',
      templateUrl: "./app/routes/buy/buy_gold/gold_256GB_1.1GHz.html",
      controller: "gold_256GB_1.1GHz"
    })

		// MacBook BUY_Gold_256GB_1.3GHz STATE
    .state('gold_256gb_13ghz', {
      url: '/macbook/gold_256gb_13ghz',
      templateUrl: "./app/routes/buy/buy_gold/gold_256GB_1.3GHz.html",
      controller: "gold_256GB_1.3GHz"
    })

		// MacBook BUY_Gold_512GB_1.2GHz STATE
    .state('gold_512gb_12ghz', {
      url: '/macbook/gold_512gb_12ghz',
      templateUrl: "./app/routes/buy/buy_gold/gold_512GB_1.2GHz.html",
      controller: "gold_512GB_1.2GHz"
    })

		// MacBook BUY_Gold_512GB_1.3GHz STATE
    .state('gold_512gb_13ghz', {
      url: '/macbook/gold_512gb_13ghz',
      templateUrl: "./app/routes/buy/buy_gold/gold_512GB_1.3GHz.html",
      controller: "gold_512GB_1.3GHz"
    })

		// MacBook BUY_SpaceGray STATE
    .state('spacegray', {
      url: '/macbook/spacegray',
      templateUrl: "./app/routes/buy/buy_spacegray/spacegray.html",
      controller: "spacegray"
    })

		// MacBook BUY_SpaceGray_256GB STATE
    .state('spacegray_256gb', {
      url: '/macbook/spacegray_256gb',
      templateUrl: "./app/routes/buy/buy_spacegray/spacegray_256GB.html",
      controller: "spacegray_256GB"
    })

		// MacBook BUY_SpaceGray_512GB STATE
    .state('spacegray_512gb', {
      url: '/macbook/spacegray_512gb',
      templateUrl: "./app/routes/buy/buy_spacegray/spacegray_512GB.html",
      controller: "spacegray_512GB"
    })

		// MacBook BUY_SpaceGray_256GB_1.1GHz STATE
    .state('spacegray_256gb_11ghz', {
      url: '/macbook/spacegray_256gb_11ghz',
      templateUrl: "./app/routes/buy/buy_spacegray/spacegray_256GB_1.1GHz.html",
      controller: "spacegray_256GB_1.1GHz"
    })

		// MacBook BUY_SpaceGray_256GB_1.3GHz STATE
    .state('spacegray_256gb_13ghz', {
      url: '/macbook/spacegray_256gb_13ghz',
      templateUrl: "./app/routes/buy/buy_spacegray/spacegray_256GB_1.3GHz.html",
      controller: "spacegray_256GB_1.3GHz"
    })

		// MacBook BUY_SpaceGray_512GB_1.2GHz STATE
    .state('spacegray_512gb_12ghz', {
      url: '/macbook/spacegray_512gb_12ghz',
      templateUrl: "./app/routes/buy/buy_spacegray/spacegray_512GB_1.2GHz.html",
      controller: "spacegray_512GB_1.2GHz"
    })

		// MacBook BUY_SpaceGray_512GB_1.3GHz STATE
    .state('spacegray_512gb_13ghz', {
      url: '/macbook/spacegray_512gb_13ghz',
      templateUrl: "./app/routes/buy/buy_spacegray/spacegray_512GB_1.3GHz.html",
      controller: "spacegray_512GB_1.3GHz"
    })

		// MacBook BUY_RoseGold STATE
    .state('rosegold', {
      url: '/macbook/rosegold',
      templateUrl: "./app/routes/buy/buy_rosegold/rosegold.html",
      controller: "rosegold"
    })

		// MacBook BUY_RoseGold_256GB STATE
    .state('rosegold_256gb', {
      url: '/macbook/rosegold_256gb',
      templateUrl: "./app/routes/buy/buy_rosegold/rosegold_256GB.html",
      controller: "rosegold_256GB"
    })

		// MacBook BUY_RoseGold_256GB_1.1GHz STATE
    .state('rosegold_256gb_11ghz', {
      url: '/macbook/rosegold_256gb_11ghz',
      templateUrl: "./app/routes/buy/buy_rosegold/rosegold_256GB_1.1GHz.html",
      controller: "rosegold_256GB_1.1GHz"
    })

		// MacBook BUY_RoseGold_256GB_1.3GHz STATE
    .state('rosegold_256gb_13ghz', {
      url: '/macbook/rosegold_256gb_13ghz',
      templateUrl: "./app/routes/buy/buy_rosegold/rosegold_256GB_1.3GHz.html",
      controller: "rosegold_256GB_1.3GHz"
    })

		// MacBook BUY_RoseGold_512GB STATE
    .state('rosegold_512gb', {
      url: '/macbook/rosegold_512gb',
      templateUrl: "./app/routes/buy/buy_rosegold/rosegold_512GB.html",
      controller: "rosegold_512GB"
    })

		// MacBook BUY_RoseGold_512GB_1.2GHz STATE
    .state('rosegold_512gb_12ghz', {
      url: '/macbook/rosegold_512gb_12ghz',
      templateUrl: "./app/routes/buy/buy_rosegold/rosegold_512GB_1.2GHz.html",
      controller: "rosegold_512GB_1.2GHz"
    })

		// MacBook BUY_RoseGold_512GB_1.3GHz STATE
    .state('rosegold_512gb_13ghz', {
      url: '/macbook/rosegold_512gb_13ghz',
      templateUrl: "./app/routes/buy/buy_rosegold/rosegold_512GB_1.3GHz.html",
      controller: "rosegold_512GB_1.3GHz"
    });




		// ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('macbook');
	});
