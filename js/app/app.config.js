var app = angular.module('MyApp', ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl:'/home/testexam/Documents/AngularJsCode (copy)/js/app/home/home.template.html',
        controller : 'mainController'

    .otherwise("/login");
});
