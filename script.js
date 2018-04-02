var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })

        .when('/customer', {
            templateUrl : 'views/customer.html',
            controller  : 'customerController'
        })

        .when('/product', {
            templateUrl : 'views/product.html',
            controller  : 'productsController'
        });
});

myApp.controller('mainController', function($scope) {
    $scope.pagecontent = 'I am HOME Page';
    $scope.inputdata = 'Input Data';
});

myApp.controller('customerController', function($scope) {
    $scope.pagecontent = 'Welcome to CUSTOMER Page';
    
});

myApp.controller('productsController', function($scope) {
    $scope.pagecontent = 'Welcome to Product Page';
});

